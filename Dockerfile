FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /gourmet-gateway

EXPOSE 8080
EXPOSE 8081

RUN apt-get update \
    && apt-get install -y \
        curl \
        libpng-dev \
        libjpeg-dev \
        libxi6 \
        build-essential \
        libgl1-mesa-glx \
    && curl -sL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn \
    && rm -rf /var/lib/apt/lists/*

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

RUN apt-get update \
    && apt-get install -y \
        curl \
        libpng-dev \
        libjpeg-dev \
        libxi6 \
        build-essential \
        libgl1-mesa-glx \
    && curl -sL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn \
    && rm -rf /var/lib/apt/lists/*

COPY ["frontend/nuget.config", "frontend/"]
COPY ["frontend/.env.sentry-build-plugin", "frontend/"]
COPY ["frontend/frontend.esproj", "frontend/"]
COPY ["backend/backend.csproj", "backend/"]

RUN dotnet restore "./backend/./backend.csproj"

COPY . .

WORKDIR "/src/backend"

RUN dotnet build "./backend.csproj" -c Release -o /gourmet-gateway/build

FROM build AS publish

RUN dotnet publish "./backend.csproj" -c Release -o /gourmet-gateway/publish /p:UseAppHost=false

FROM base AS final

WORKDIR /gourmet-gateway

COPY --from=publish /gourmet-gateway/publish .

ENTRYPOINT ["dotnet", "backend.dll"]