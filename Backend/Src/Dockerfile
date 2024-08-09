FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /gourmet-gateway

EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY ["GourmetGateway.csproj", "."]

RUN dotnet restore "./GourmetGateway.csproj"

COPY . .

WORKDIR "/src/."

RUN dotnet build "./GourmetGateway.csproj" -c Release -o /gourmet-gateway/build

FROM build AS publish

RUN dotnet publish "./GourmetGateway.csproj" -c Release -o /gourmet-gateway/publish /p:UseAppHost=false

FROM base AS final

WORKDIR /gourmet-gateway

COPY --from=publish /gourmet-gateway/publish .

ENTRYPOINT ["dotnet", "GourmetGateway.dll"]