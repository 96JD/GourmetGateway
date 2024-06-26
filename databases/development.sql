DROP DATABASE IF EXISTS Gourmet_Gateway;
CREATE DATABASE Gourmet_Gateway;
USE Gourmet_Gateway;

CREATE TABLE Goods (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(25) NOT NULL UNIQUE CHECK (LENGTH(name) >= 3),
  image_url VARCHAR(255) NOT NULL CHECK (LENGTH(image_url) >= 10),
  in_shopping_list TINYINT NOT NULL
);

CREATE TABLE Recipe_Categories (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(15) NOT NULL UNIQUE CHECK (LENGTH(name) >= 3)
);

CREATE TABLE Recipes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE CHECK (LENGTH(name) >= 4),
  image_url VARCHAR(255) NOT NULL CHECK (LENGTH(image_url) >= 10),
  recipe_category_id INT NOT NULL,
  FOREIGN KEY (recipe_category_id) REFERENCES Recipe_Categories(id)
);

INSERT INTO Goods VALUES (1, "Whole Chicken", "/assets/images/goods/Whole Chicken.png", 0);
INSERT INTO Goods VALUES (2, "Chicken Breasts", "/assets/images/goods/Chicken Breasts.png", 0);
INSERT INTO Goods VALUES (3, "Chicken Thighs", "/assets/images/goods/Chicken Thighs.png", 0);
INSERT INTO Goods VALUES (4, "Chicken Liver", "/assets/images/goods/Chicken Liver.png", 0);
INSERT INTO Goods VALUES (5, "Block Meat", "/assets/images/goods/Block Meat.png", 0);
INSERT INTO Goods VALUES (6, "Ground Meat", "/assets/images/goods/Ground Meat.png", 0);
INSERT INTO Goods VALUES (7, "Sijqat", "/assets/images/goods/Sijqat.png", 0);
INSERT INTO Goods VALUES (8, "Fish", "/assets/images/goods/Fish.png", 0);
INSERT INTO Goods VALUES (9, "Fish Fingers", "/assets/images/goods/Fish Fingers.png", 0);
INSERT INTO Goods VALUES (10, "Shrimps", "/assets/images/goods/Shrimps.png", 0);
INSERT INTO Goods VALUES (11, "Pizza", "/assets/images/goods/Pizza.png", 0);
INSERT INTO Goods VALUES (12, "Falafel", "/assets/images/goods/Falafel.png", 0);
INSERT INTO Goods VALUES (13, "Plant Based Burgers", "/assets/images/goods/Plant Based Burgers.png", 0);
INSERT INTO Goods VALUES (14, "French Fries", "/assets/images/goods/French Fries.png", 0);
INSERT INTO Goods VALUES (15, "Onion Rings", "/assets/images/goods/Onion Rings.png", 0);
INSERT INTO Goods VALUES (16, "Mozzarella Sticks", "/assets/images/goods/Mozzarella Sticks.png", 0);
INSERT INTO Goods VALUES (17, "Okra", "/assets/images/goods/Okra.png", 0);
INSERT INTO Goods VALUES (18, "Spinach", "/assets/images/goods/Spinach.png", 0);
INSERT INTO Goods VALUES (19, "Carrot", "/assets/images/goods/Carrot.png", 0);
INSERT INTO Goods VALUES (20, "Broccoli", "/assets/images/goods/Broccoli.png", 0);
INSERT INTO Goods VALUES (21, "Cauliflower", "/assets/images/goods/Cauliflower.png", 0);
INSERT INTO Goods VALUES (22, "Green Beans", "/assets/images/goods/Green Beans.png", 0);
INSERT INTO Goods VALUES (23, "Soy Beans", "/assets/images/goods/Soy Beans.png", 0);
INSERT INTO Goods VALUES (24, "Green Peas", "/assets/images/goods/Green Peas.png", 0);
INSERT INTO Goods VALUES (25, "Avocado", "/assets/images/goods/Avocado.png", 0);
INSERT INTO Goods VALUES (26, "Pineapple", "/assets/images/goods/Pineapple.png", 0);
INSERT INTO Goods VALUES (27, "Mango", "/assets/images/goods/Mango.png", 0);
INSERT INTO Goods VALUES (28, "Strawberries", "/assets/images/goods/Strawberries.png", 0);
INSERT INTO Goods VALUES (29, "Forest Berries", "/assets/images/goods/Forest Berries.png", 0);
INSERT INTO Goods VALUES (30, "Eggs", "/assets/images/goods/Eggs.png", 0);
INSERT INTO Goods VALUES (31, "Yoghurt", "/assets/images/goods/Yoghurt.png", 1);
INSERT INTO Goods VALUES (32, "Mozzarella Cheese", "/assets/images/goods/Mozzarella Cheese.png", 0);
INSERT INTO Goods VALUES (33, "Cheddar Cheese", "/assets/images/goods/Cheddar Cheese.png", 0);
INSERT INTO Goods VALUES (34, "Cottage Cheese", "/assets/images/goods/Cottage Cheese.png", 0);
INSERT INTO Goods VALUES (35, "Cream Cheese", "/assets/images/goods/Cream Cheese.png", 0);
INSERT INTO Goods VALUES (36, "Milk", "/assets/images/goods/Milk.png", 1);
INSERT INTO Goods VALUES (37, "Coconut Milk", "/assets/images/goods/Coconut Milk.png", 0);
INSERT INTO Goods VALUES (38, "Condensed Milk", "/assets/images/goods/Condensed Milk.png", 0);
INSERT INTO Goods VALUES (39, "Qishta", "/assets/images/goods/Qishta.png", 0);
INSERT INTO Goods VALUES (40, "Halawa", "/assets/images/goods/Halawa.png", 0);
INSERT INTO Goods VALUES (41, "Butter", "/assets/images/goods/Butter.png", 0);
INSERT INTO Goods VALUES (42, "Chocolate Spread", "/assets/images/goods/Chocolate Spread.png", 0);
INSERT INTO Goods VALUES (43, "Peanut Butter Spread", "/assets/images/goods/Peanut Butter Spread.png", 0);
INSERT INTO Goods VALUES (44, "Pistachio Spread", "/assets/images/goods/Pistachio Spread.png", 0);
INSERT INTO Goods VALUES (45, "Lotus Biscoff Spread", "/assets/images/goods/Lotus Biscoff Spread.png", 0);
INSERT INTO Goods VALUES (46, "Pumpkin", "/assets/images/goods/Pumpkin.png", 0);
INSERT INTO Goods VALUES (47, "Eggplants", "/assets/images/goods/Eggplants.png", 0);
INSERT INTO Goods VALUES (48, "Zucchinis", "/assets/images/goods/Zucchinis.png", 0);
INSERT INTO Goods VALUES (49, "Potato", "/assets/images/goods/Potato.png", 0);
INSERT INTO Goods VALUES (50, "Sweet Potato", "/assets/images/goods/Sweet Potato.png", 0);
INSERT INTO Goods VALUES (51, "Cassava", "/assets/images/goods/Cassava.png", 0);
INSERT INTO Goods VALUES (52, "Paprika", "/assets/images/goods/Paprika.png", 0);
INSERT INTO Goods VALUES (53, "Tomatoes", "/assets/images/goods/Tomatoes.png", 0);
INSERT INTO Goods VALUES (54, "Cucumbers", "/assets/images/goods/Cucumbers.png", 0);
INSERT INTO Goods VALUES (55, "Yellow Carrot", "/assets/images/goods/Yellow Carrot.png", 0);
INSERT INTO Goods VALUES (56, "Leeks", "/assets/images/goods/Leeks.png", 0);
INSERT INTO Goods VALUES (57, "Onions", "/assets/images/goods/Onions.png", 0);
INSERT INTO Goods VALUES (58, "Garlic", "/assets/images/goods/Garlic.png", 0);
INSERT INTO Goods VALUES (59, "Lemons", "/assets/images/goods/Lemons.png", 0);
INSERT INTO Goods VALUES (60, "Ginger", "/assets/images/goods/Ginger.png", 0);
INSERT INTO Goods VALUES (61, "Cabbage", "/assets/images/goods/Cabbage.png", 0);
INSERT INTO Goods VALUES (62, "Chards", "/assets/images/goods/Chards.png", 0);
INSERT INTO Goods VALUES (63, "Cheeseweed", "/assets/images/goods/Cheeseweed.png", 0);
INSERT INTO Goods VALUES (64, "Radicchio", "/assets/images/goods/Radicchio.png", 0);
INSERT INTO Goods VALUES (65, "Celery", "/assets/images/goods/Celery.png", 0);
INSERT INTO Goods VALUES (66, "Arugula", "/assets/images/goods/Arugula.png", 0);
INSERT INTO Goods VALUES (67, "Lettuce", "/assets/images/goods/Lettuce.png", 0);
INSERT INTO Goods VALUES (68, "Parsley", "/assets/images/goods/Parsley.png", 0);
INSERT INTO Goods VALUES (69, "Mint", "/assets/images/goods/Mint.png", 0);
INSERT INTO Goods VALUES (70, "Dill", "/assets/images/goods/Dill.png", 0);
INSERT INTO Goods VALUES (71, "Radish", "/assets/images/goods/Radish.png", 0);
INSERT INTO Goods VALUES (72, "Apples", "/assets/images/goods/Apples.png", 1);
INSERT INTO Goods VALUES (73, "Banana", "/assets/images/goods/Banana.png", 1);
INSERT INTO Goods VALUES (74, "Kiwi", "/assets/images/goods/Kiwi.png", 0);
INSERT INTO Goods VALUES (75, "Clementines", "/assets/images/goods/Clementines.png", 0);
INSERT INTO Goods VALUES (76, "Oranges", "/assets/images/goods/Oranges.png", 0);
INSERT INTO Goods VALUES (77, "Grapefruits", "/assets/images/goods/Grapefruits.png", 0);
INSERT INTO Goods VALUES (78, "Pomelo", "/assets/images/goods/Pomelo.png", 0);
INSERT INTO Goods VALUES (79, "Watermelon", "/assets/images/goods/Watermelon.png", 0);
INSERT INTO Goods VALUES (80, "Cantaloupe", "/assets/images/goods/Cantaloupe.png", 0);
INSERT INTO Goods VALUES (81, "Pomegranates", "/assets/images/goods/Pomegranates.png", 0);
INSERT INTO Goods VALUES (82, "Coconut", "/assets/images/goods/Coconut.png", 0);
INSERT INTO Goods VALUES (83, "Opuntias", "/assets/images/goods/Opuntias.png", 0);
INSERT INTO Goods VALUES (84, "Peaches", "/assets/images/goods/Peaches.png", 0);
INSERT INTO Goods VALUES (85, "Apricots", "/assets/images/goods/Apricots.png", 0);
INSERT INTO Goods VALUES (86, "Grapes", "/assets/images/goods/Grapes.png", 0);
INSERT INTO Goods VALUES (87, "Cherries", "/assets/images/goods/Cherries.png", 0);
INSERT INTO Goods VALUES (88, "Loquats", "/assets/images/goods/Loquats.png", 0);
INSERT INTO Goods VALUES (89, "Green Almonds", "/assets/images/goods/Green Almonds.png", 0);
INSERT INTO Goods VALUES (90, "Greengages", "/assets/images/goods/Greengages.png", 0);
INSERT INTO Goods VALUES (91, "Dried Figs", "/assets/images/goods/Dried Figs.png", 0);
INSERT INTO Goods VALUES (92, "Dates", "/assets/images/goods/Dates.png", 0);
INSERT INTO Goods VALUES (93, "Raisins", "/assets/images/goods/Raisins.png", 0);
INSERT INTO Goods VALUES (94, "Jute Mallow", "/assets/images/goods/Jute Mallow.png", 0);
INSERT INTO Goods VALUES (95, "Grape Leaves", "/assets/images/goods/Grape Leaves.png", 0);
INSERT INTO Goods VALUES (96, "Nori", "/assets/images/goods/Nori.png", 0);
INSERT INTO Goods VALUES (97, "Long Rice", "/assets/images/goods/Long Rice.png", 0);
INSERT INTO Goods VALUES (98, "Short Rice", "/assets/images/goods/Short Rice.png", 0);
INSERT INTO Goods VALUES (99, "Coarse Bulgur", "/assets/images/goods/Coarse Bulgur.png", 0);
INSERT INTO Goods VALUES (100, "Fine Bulgur", "/assets/images/goods/Fine Bulgur.png", 0);
INSERT INTO Goods VALUES (101, "Brown Lentils", "/assets/images/goods/Brown Lentils.png", 0);
INSERT INTO Goods VALUES (102, "Red Lentils", "/assets/images/goods/Red Lentils.png", 0);
INSERT INTO Goods VALUES (103, "Freekeh", "/assets/images/goods/Freekeh.png", 0);
INSERT INTO Goods VALUES (104, "Spelt", "/assets/images/goods/Spelt.png", 0);
INSERT INTO Goods VALUES (105, "Mung Beans", "/assets/images/goods/Mung Beans.png", 0);
INSERT INTO Goods VALUES (106, "Navy Beans", "/assets/images/goods/Navy Beans.png", 0);
INSERT INTO Goods VALUES (107, "Black-eyed Pea Beans", "/assets/images/goods/Black-eyed Pea Beans.png", 0);
INSERT INTO Goods VALUES (108, "Fava Beans", "/assets/images/goods/Fava Beans.png", 0);
INSERT INTO Goods VALUES (109, "Chickpeas", "/assets/images/goods/Chickpeas.png", 0);
INSERT INTO Goods VALUES (110, "Lasagna", "/assets/images/goods/Lasagna.png", 0);
INSERT INTO Goods VALUES (111, "Spaghetti", "/assets/images/goods/Spaghetti.png", 0);
INSERT INTO Goods VALUES (112, "Macaroni", "/assets/images/goods/Macaroni.png", 0);
INSERT INTO Goods VALUES (113, "Vermicelli", "/assets/images/goods/Vermicelli.png", 0);
INSERT INTO Goods VALUES (114, "Glasnudeln", "/assets/images/goods/Glasnudeln.png", 0);
INSERT INTO Goods VALUES (115, "Noodles", "/assets/images/goods/Noodles.png", 0);
INSERT INTO Goods VALUES (116, "Flour", "/assets/images/goods/Flour.png", 0);
INSERT INTO Goods VALUES (117, "Semolina", "/assets/images/goods/Semolina.png", 0);
INSERT INTO Goods VALUES (118, "Oats", "/assets/images/goods/Oats.png", 0);
INSERT INTO Goods VALUES (119, "Corn Starch", "/assets/images/goods/Corn Starch.png", 0);
INSERT INTO Goods VALUES (120, "Yeast", "/assets/images/goods/Yeast.png", 0);
INSERT INTO Goods VALUES (121, "Baking Powder", "/assets/images/goods/Baking Powder.png", 0);
INSERT INTO Goods VALUES (122, "Nigella Sativa Seeds", "/assets/images/goods/Nigella Sativa Seeds.png", 0);
INSERT INTO Goods VALUES (123, "Sesame Seeds", "/assets/images/goods/Sesame Seeds.png", 0);
INSERT INTO Goods VALUES (124, "Pumpkin Seeds", "/assets/images/goods/Pumpkin Seeds.png", 0);
INSERT INTO Goods VALUES (125, "Chia Seeds", "/assets/images/goods/Chia Seeds.png", 0);
INSERT INTO Goods VALUES (126, "Saj Bread", "/assets/images/goods/Saj Bread.png", 0);
INSERT INTO Goods VALUES (127, "Pitta Bread", "/assets/images/goods/Pitta Bread.png", 0);
INSERT INTO Goods VALUES (128, "Tortilla Bread", "/assets/images/goods/Tortilla Bread.png", 0);
INSERT INTO Goods VALUES (129, "Naan Bread", "/assets/images/goods/Naan Bread.png", 0);
INSERT INTO Goods VALUES (130, "White Bread", "/assets/images/goods/White Bread.png", 0);
INSERT INTO Goods VALUES (131, "Hamburger Bread", "/assets/images/goods/Hamburger Bread.png", 0);
INSERT INTO Goods VALUES (132, "Baguettes", "/assets/images/goods/Baguettes.png", 0);
INSERT INTO Goods VALUES (133, "Pizza Dough", "/assets/images/goods/Pizza Dough.png", 0);
INSERT INTO Goods VALUES (134, "Knafeh Dough", "/assets/images/goods/Knafeh Dough.png", 0);
INSERT INTO Goods VALUES (135, "Spring Rolls", "/assets/images/goods/Spring Rolls.png", 0);
INSERT INTO Goods VALUES (136, "Tuna", "/assets/images/goods/Tuna.png", 0);
INSERT INTO Goods VALUES (137, "Mortadella", "/assets/images/goods/Mortadella.png", 0);
INSERT INTO Goods VALUES (138, "Makdous", "/assets/images/goods/Makdous.png", 0);
INSERT INTO Goods VALUES (139, "Zaatar", "/assets/images/goods/Zaatar.png", 0);
INSERT INTO Goods VALUES (140, "Baba Ghanoush", "/assets/images/goods/Baba Ghanoush.png", 0);
INSERT INTO Goods VALUES (141, "Hummus", "/assets/images/goods/Hummus.png", 0);
INSERT INTO Goods VALUES (142, "Tomato Paste", "/assets/images/goods/Tomato Paste.png", 0);
INSERT INTO Goods VALUES (143, "Chilli Paste", "/assets/images/goods/Chilli Paste.png", 0);
INSERT INTO Goods VALUES (144, "Chopped Tomato", "/assets/images/goods/Chopped Tomato.png", 0);
INSERT INTO Goods VALUES (145, "Champignon", "/assets/images/goods/Champignon.png", 0);
INSERT INTO Goods VALUES (146, "Corn", "/assets/images/goods/Corn.png", 0);
INSERT INTO Goods VALUES (147, "Pickled Cucumbers", "/assets/images/goods/Pickled Cucumbers.png", 0);
INSERT INTO Goods VALUES (148, "Pickled Peppers", "/assets/images/goods/Pickled Peppers.png", 0);
INSERT INTO Goods VALUES (149, "Pickled Turnips", "/assets/images/goods/Pickled Turnips.png", 0);
INSERT INTO Goods VALUES (150, "Pickled Ginger", "/assets/images/goods/Pickled Ginger.png", 0);
INSERT INTO Goods VALUES (151, "Green Olives", "/assets/images/goods/Green Olives.png", 0);
INSERT INTO Goods VALUES (152, "Black Olives", "/assets/images/goods/Black Olives.png", 0);
INSERT INTO Goods VALUES (153, "Olive Oil", "/assets/images/goods/Olive Oil.png", 0);
INSERT INTO Goods VALUES (154, "Rapeseed Oil", "/assets/images/goods/Rapeseed Oil.png", 0);
INSERT INTO Goods VALUES (155, "Vinegar", "/assets/images/goods/Vinegar.png", 0);
INSERT INTO Goods VALUES (156, "Lemon Juice", "/assets/images/goods/Lemon Juice.png", 0);
INSERT INTO Goods VALUES (157, "Tahina", "/assets/images/goods/Tahina.png", 0);
INSERT INTO Goods VALUES (158, "Pomegranate Molasses", "/assets/images/goods/Pomegranate Molasses.png", 0);
INSERT INTO Goods VALUES (159, "Coleslaw", "/assets/images/goods/Coleslaw.png", 0);
INSERT INTO Goods VALUES (160, "Mayonnaise", "/assets/images/goods/Mayonnaise.png", 0);
INSERT INTO Goods VALUES (161, "Ketchub", "/assets/images/goods/Ketchub.png", 0);
INSERT INTO Goods VALUES (162, "Mustard", "/assets/images/goods/Mustard.png", 0);
INSERT INTO Goods VALUES (163, "Pesto Sauce", "/assets/images/goods/Pesto Sauce.png", 0);
INSERT INTO Goods VALUES (164, "Taco Sauce", "/assets/images/goods/Taco Sauce.png", 0);
INSERT INTO Goods VALUES (165, "Guacamole Sauce", "/assets/images/goods/Guacamole Sauce.png", 0);
INSERT INTO Goods VALUES (166, "Bechamel Sauce", "/assets/images/goods/Bechamel Sauce.png", 0);
INSERT INTO Goods VALUES (167, "Tikka Masala Sauce", "/assets/images/goods/Tikka Masala Sauce.png", 0);
INSERT INTO Goods VALUES (168, "Butter Chicken Sauce", "/assets/images/goods/Butter Chicken Sauce.png", 0);
INSERT INTO Goods VALUES (169, "Mango Curry Sauce", "/assets/images/goods/Mango Curry Sauce.png", 0);
INSERT INTO Goods VALUES (170, "Soy Sauce", "/assets/images/goods/Soy Sauce.png", 0);
INSERT INTO Goods VALUES (171, "Oyster Sauce", "/assets/images/goods/Oyster Sauce.png", 0);
INSERT INTO Goods VALUES (172, "Salt", "/assets/images/goods/Salt.png", 0);
INSERT INTO Goods VALUES (173, "Pepper", "/assets/images/goods/Pepper.png", 0);
INSERT INTO Goods VALUES (174, "7 Spices", "/assets/images/goods/7 Spices.png", 0);
INSERT INTO Goods VALUES (175, "Taco Spices", "/assets/images/goods/Taco Spices.png", 0);
INSERT INTO Goods VALUES (176, "Curry Spices", "/assets/images/goods/Curry Spices.png", 0);
INSERT INTO Goods VALUES (177, "Coriander Spices", "/assets/images/goods/Coriander Spices.png", 0);
INSERT INTO Goods VALUES (178, "Cumin Spices", "/assets/images/goods/Cumin Spices.png", 0);
INSERT INTO Goods VALUES (179, "Sumac Spices", "/assets/images/goods/Sumac Spices.png", 0);
INSERT INTO Goods VALUES (180, "Turmeric Spices", "/assets/images/goods/Turmeric Spices.png", 0);
INSERT INTO Goods VALUES (181, "Safflower Spices", "/assets/images/goods/Safflower Spices.png", 0);
INSERT INTO Goods VALUES (182, "Mint Spices", "/assets/images/goods/Mint Spices.png", 0);
INSERT INTO Goods VALUES (183, "Oregano Spices", "/assets/images/goods/Oregano Spices.png", 0);
INSERT INTO Goods VALUES (184, "Basil Spices", "/assets/images/goods/Basil Spices.png", 0);
INSERT INTO Goods VALUES (185, "Rosemary Spices", "/assets/images/goods/Rosemary Spices.png", 0);
INSERT INTO Goods VALUES (186, "Cinnamon Spices", "/assets/images/goods/Cinnamon Spices.png", 0);
INSERT INTO Goods VALUES (187, "Cardamom Spices", "/assets/images/goods/Cardamom Spices.png", 0);
INSERT INTO Goods VALUES (188, "Bay Leaves", "/assets/images/goods/Bay Leaves.png", 0);
INSERT INTO Goods VALUES (189, "Coffee", "/assets/images/goods/Coffee.png", 1);
INSERT INTO Goods VALUES (190, "Cacao", "/assets/images/goods/Cacao.png", 0);
INSERT INTO Goods VALUES (191, "Tea", "/assets/images/goods/Tea.png", 0);
INSERT INTO Goods VALUES (192, "Mate", "/assets/images/goods/Mate.png", 0);
INSERT INTO Goods VALUES (193, "Coconut Pulp", "/assets/images/goods/Coconut Pulp.png", 0);
INSERT INTO Goods VALUES (194, "Milk Powder", "/assets/images/goods/Milk Powder.png", 0);
INSERT INTO Goods VALUES (195, "Vanilla Powder", "/assets/images/goods/Vanilla Powder.png", 0);
INSERT INTO Goods VALUES (196, "Sugar", "/assets/images/goods/Sugar.png", 0);
INSERT INTO Goods VALUES (197, "Honey", "/assets/images/goods/Honey.png", 0);
INSERT INTO Goods VALUES (198, "Date Molasses", "/assets/images/goods/Date Molasses.png", 0);
INSERT INTO Goods VALUES (199, "Rose Water", "/assets/images/goods/Rose Water.png", 0);
INSERT INTO Goods VALUES (200, "Geleh Powder", "/assets/images/goods/Geleh Powder.png", 0);
INSERT INTO Goods VALUES (201, "Custard Powder", "/assets/images/goods/Custard Powder.png", 0);
INSERT INTO Goods VALUES (202, "Meghli Powder", "/assets/images/goods/Meghli Powder.png", 0);
INSERT INTO Goods VALUES (203, "Popcorn", "/assets/images/goods/Popcorn.png", 0);
INSERT INTO Goods VALUES (204, "Rice Cake", "/assets/images/goods/Rice Cake.png", 0);
INSERT INTO Goods VALUES (205, "Kaak Malih", "/assets/images/goods/Kaak Malih.png", 0);
INSERT INTO Goods VALUES (206, "Salt Sticks", "/assets/images/goods/Salt Sticks.png", 0);
INSERT INTO Goods VALUES (207, "Japanese Rice Crackers", "/assets/images/goods/Japanese Rice Crackers.png", 0);
INSERT INTO Goods VALUES (208, "Nuts", "/assets/images/goods/Nuts.png", 0);
INSERT INTO Goods VALUES (209, "Coated Nuts", "/assets/images/goods/Coated Nuts.png", 0);
INSERT INTO Goods VALUES (210, "Pistachios", "/assets/images/goods/Pistachios.png", 0);
INSERT INTO Goods VALUES (211, "Sunflower Seeds", "/assets/images/goods/Sunflower Seeds.png", 0);
INSERT INTO Goods VALUES (212, "Watermelon Seeds", "/assets/images/goods/Watermelon Seeds.png", 0);
INSERT INTO Goods VALUES (213, "Cheez Doodles", "/assets/images/goods/Cheez Doodles.png", 0);
INSERT INTO Goods VALUES (214, "Potato Chips", "/assets/images/goods/Potato Chips.png", 0);
INSERT INTO Goods VALUES (215, "Tortilla Chips", "/assets/images/goods/Tortilla Chips.png", 0);
INSERT INTO Goods VALUES (216, "Chocolate Cookies", "/assets/images/goods/Chocolate Cookies.png", 0);
INSERT INTO Goods VALUES (217, "Oreo Cookies", "/assets/images/goods/Oreo Cookies.png", 0);
INSERT INTO Goods VALUES (218, "Plain Biscuits", "/assets/images/goods/Plain Biscuits.png", 0);
INSERT INTO Goods VALUES (219, "Lady Finger Biscuits", "/assets/images/goods/Lady Finger Biscuits.png", 0);
INSERT INTO Goods VALUES (220, "Lotus Biscoff Biscuits", "/assets/images/goods/Lotus Biscoff Biscuits.png", 0);
INSERT INTO Goods VALUES (221, "Ice Cream", "/assets/images/goods/Ice Cream.png", 0);
INSERT INTO Goods VALUES (222, "Cola", "/assets/images/goods/Cola.png", 0);
INSERT INTO Goods VALUES (223, "Lemonade", "/assets/images/goods/Lemonade.png", 0);

INSERT INTO Recipe_Categories VALUES (1, "Food");
INSERT INTO Recipe_Categories VALUES (2, "Dessert");

INSERT INTO Recipes VALUES (1, "Sijqat", "/assets/images/recipes/food/Sijqat.png", 1);
INSERT INTO Recipes VALUES (2, "Dolma", "/assets/images/recipes/food/Dolma.png", 1);
INSERT INTO Recipes VALUES (3, "Mahashi", "/assets/images/recipes/food/Mahashi.png", 1);
INSERT INTO Recipes VALUES (4, "Mahshi Kosa", "/assets/images/recipes/food/Mahshi Kosa.png", 1);
INSERT INTO Recipes VALUES (5, "Mahshi Jazar", "/assets/images/recipes/food/Mahshi Jazar.png", 1);
INSERT INTO Recipes VALUES (6, "Mahshi Malfof", "/assets/images/recipes/food/Mahshi Malfof.png", 1);
INSERT INTO Recipes VALUES (7, "Mahshi Salq", "/assets/images/recipes/food/Mahshi Salq.png", 1);
INSERT INTO Recipes VALUES (8, "Warak Enab", "/assets/images/recipes/food/Warak Enab.png", 1);
INSERT INTO Recipes VALUES (9, "Shakiryeh", "/assets/images/recipes/food/Shakiryeh.png", 1);
INSERT INTO Recipes VALUES (10, "Shish Barak", "/assets/images/recipes/food/Shish Barak.png", 1);
INSERT INTO Recipes VALUES (11, "Kibbeh", "/assets/images/recipes/food/Kibbeh.png", 1);
INSERT INTO Recipes VALUES (12, "Msiloqat", "/assets/images/recipes/food/Msiloqat.png", 1);
INSERT INTO Recipes VALUES (13, "Kabseh", "/assets/images/recipes/food/Kabseh.png", 1);
INSERT INTO Recipes VALUES (14, "Maqlubat Bazinjan", "/assets/images/recipes/food/Maqlubat Bazinjan.png", 1);
INSERT INTO Recipes VALUES (15, "Maqlubat Bazella", "/assets/images/recipes/food/Maqlubat Bazella.png", 1);
INSERT INTO Recipes VALUES (16, "Freekeh", "/assets/images/recipes/food/Freekeh.png", 1);
INSERT INTO Recipes VALUES (17, "Mlukhiyeh", "/assets/images/recipes/food/Mlukhiyeh.png", 1);
INSERT INTO Recipes VALUES (18, "Sabanekh", "/assets/images/recipes/food/Sabanekh.png", 1);
INSERT INTO Recipes VALUES (19, "Fasolieh Yabseh", "/assets/images/recipes/food/Fasolieh Yabseh.png", 1);
INSERT INTO Recipes VALUES (20, "Bameh", "/assets/images/recipes/food/Bameh.png", 1);
INSERT INTO Recipes VALUES (21, "Yakhneh Farroug", "/assets/images/recipes/food/Yakhneh Farroug.png", 1);
INSERT INTO Recipes VALUES (22, "Sinigang", "/assets/images/recipes/food/Sinigang.png", 1);
INSERT INTO Recipes VALUES (23, "Ginisang Munggo", "/assets/images/recipes/food/Ginisang Munggo.png", 1);
INSERT INTO Recipes VALUES (24, "Adobo", "/assets/images/recipes/food/Adobo.png", 1);
INSERT INTO Recipes VALUES (25, "Tikka Masala", "/assets/images/recipes/food/Tikka Masala.png", 1);
INSERT INTO Recipes VALUES (26, "Butter Chicken", "/assets/images/recipes/food/Butter Chicken.png", 1);
INSERT INTO Recipes VALUES (27, "Mango Chicken Curry", "/assets/images/recipes/food/Mango Chicken Curry.png", 1);
INSERT INTO Recipes VALUES (28, "Rizz Bfoul", "/assets/images/recipes/food/Rizz Bfoul.png", 1);
INSERT INTO Recipes VALUES (29, "Mjaddara", "/assets/images/recipes/food/Mjaddara.png", 1);
INSERT INTO Recipes VALUES (30, "Risotto", "/assets/images/recipes/food/Risotto.png", 1);
INSERT INTO Recipes VALUES (31, "Tortang Talong", "/assets/images/recipes/food/Tortang Talong.png", 1);
INSERT INTO Recipes VALUES (32, "Fried Rice", "/assets/images/recipes/food/Fried Rice.png", 1);
INSERT INTO Recipes VALUES (33, "Lasagne", "/assets/images/recipes/food/Lasagne.png", 1);
INSERT INTO Recipes VALUES (34, "Bechamel Macaroni", "/assets/images/recipes/food/Bechamel Macaroni.png", 1);
INSERT INTO Recipes VALUES (35, "Mac & Cheese", "/assets/images/recipes/food/Mac & Cheese.png", 1);
INSERT INTO Recipes VALUES (36, "Fettuccine Alfredo", "/assets/images/recipes/food/Fettuccine Alfredo.png", 1);
INSERT INTO Recipes VALUES (37, "Pizza Pasta", "/assets/images/recipes/food/Pizza Pasta.png", 1);
INSERT INTO Recipes VALUES (38, "Pancit", "/assets/images/recipes/food/Pancit.png", 1);
INSERT INTO Recipes VALUES (39, "Samak", "/assets/images/recipes/food/Samak.png", 1);
INSERT INTO Recipes VALUES (40, "Maqali", "/assets/images/recipes/food/Maqali.png", 1);
INSERT INTO Recipes VALUES (41, "Kofta", "/assets/images/recipes/food/Kofta.png", 1);
INSERT INTO Recipes VALUES (42, "Farroug Batata", "/assets/images/recipes/food/Farroug Batata.png", 1);
INSERT INTO Recipes VALUES (43, "Karaa", "/assets/images/recipes/food/Karaa.png", 1);
INSERT INTO Recipes VALUES (44, "Mnazzlet Kosa", "/assets/images/recipes/food/Mnazzlet Kosa.png", 1);
INSERT INTO Recipes VALUES (45, "Mnazzlet Bazinjan", "/assets/images/recipes/food/Mnazzlet Bazinjan.png", 1);
INSERT INTO Recipes VALUES (46, "Moussaka", "/assets/images/recipes/food/Moussaka.png", 1);
INSERT INTO Recipes VALUES (47, "Tabakh Roho", "/assets/images/recipes/food/Tabakh Roho.png", 1);
INSERT INTO Recipes VALUES (48, "Wekeh", "/assets/images/recipes/food/Wekeh.png", 1);
INSERT INTO Recipes VALUES (49, "Mielaq", "/assets/images/recipes/food/Mielaq.png", 1);
INSERT INTO Recipes VALUES (50, "Naqaniq", "/assets/images/recipes/food/Naqaniq.png", 1);
INSERT INTO Recipes VALUES (51, "Mfarrkeh Lahmeh", "/assets/images/recipes/food/Mfarrkeh Lahmeh.png", 1);
INSERT INTO Recipes VALUES (52, "Mfarrkeh Baid", "/assets/images/recipes/food/Mfarrkeh Baid.png", 1);
INSERT INTO Recipes VALUES (53, "Kerrat", "/assets/images/recipes/food/Kerrat.png", 1);
INSERT INTO Recipes VALUES (54, "Fasolia Lahmeh", "/assets/images/recipes/food/Fasolia Lahmeh.png", 1);
INSERT INTO Recipes VALUES (55, "Fasolia Zeit", "/assets/images/recipes/food/Fasolia Zeit.png", 1);
INSERT INTO Recipes VALUES (56, "Salq Loubeh", "/assets/images/recipes/food/Salq Loubeh.png", 1);
INSERT INTO Recipes VALUES (57, "Khibbezeh", "/assets/images/recipes/food/Khibbezeh.png", 1);
INSERT INTO Recipes VALUES (58, "Hindbeh", "/assets/images/recipes/food/Hindbeh.png", 1);
INSERT INTO Recipes VALUES (59, "Steak", "/assets/images/recipes/food/Steak.png", 1);
INSERT INTO Recipes VALUES (60, "Hamburger", "/assets/images/recipes/food/Hamburger.png", 1);
INSERT INTO Recipes VALUES (61, "Salmon", "/assets/images/recipes/food/Salmon.png", 1);
INSERT INTO Recipes VALUES (62, "Sushi", "/assets/images/recipes/food/Sushi.png", 1);
INSERT INTO Recipes VALUES (63, "Pizza", "/assets/images/recipes/food/Pizza.png", 1);
INSERT INTO Recipes VALUES (64, "Farroug Meshwi", "/assets/images/recipes/food/Farroug Meshwi.png", 1);
INSERT INTO Recipes VALUES (65, "Farroug Broasted", "/assets/images/recipes/food/Farroug Broasted.png", 1);
INSERT INTO Recipes VALUES (66, "Shish Tawook", "/assets/images/recipes/food/Shish Tawook.png", 1);
INSERT INTO Recipes VALUES (67, "Kebab", "/assets/images/recipes/food/Kebab.png", 1);
INSERT INTO Recipes VALUES (68, "Shawarma Farroug", "/assets/images/recipes/food/Shawarma Farroug.png", 1);
INSERT INTO Recipes VALUES (69, "Shawarma Lahmeh", "/assets/images/recipes/food/Shawarma Lahmeh.png", 1);
INSERT INTO Recipes VALUES (70, "Falafel", "/assets/images/recipes/food/Falafel.png", 1);
INSERT INTO Recipes VALUES (71, "Tacos", "/assets/images/recipes/food/Tacos.png", 1);
INSERT INTO Recipes VALUES (72, "Quesadillas", "/assets/images/recipes/food/Quesadillas.png", 1);
INSERT INTO Recipes VALUES (73, "Shoul", "/assets/images/recipes/food/Shoul.png", 1);
INSERT INTO Recipes VALUES (74, "Yalanji", "/assets/images/recipes/food/Yalanji.png", 1);
INSERT INTO Recipes VALUES (75, "Fatteh", "/assets/images/recipes/food/Fatteh.png", 1);
INSERT INTO Recipes VALUES (76, "Sfiha", "/assets/images/recipes/food/Sfiha.png", 1);
INSERT INTO Recipes VALUES (77, "Fatayir", "/assets/images/recipes/food/Fatayir.png", 1);
INSERT INTO Recipes VALUES (78, "Pierogies", "/assets/images/recipes/food/Pierogies.png", 1);
INSERT INTO Recipes VALUES (79, "Lumpia", "/assets/images/recipes/food/Lumpia.png", 1);
INSERT INTO Recipes VALUES (80, "Samosa", "/assets/images/recipes/food/Samosa.png", 1);
INSERT INTO Recipes VALUES (81, "Burak Jebneh", "/assets/images/recipes/food/Burak Jebneh.png", 1);
INSERT INTO Recipes VALUES (82, "Arroz Caldo", "/assets/images/recipes/food/Arroz Caldo.png", 1);
INSERT INTO Recipes VALUES (83, "Qamhieh", "/assets/images/recipes/food/Qamhieh.png", 1);
INSERT INTO Recipes VALUES (84, "Richta", "/assets/images/recipes/food/Richta.png", 1);
INSERT INTO Recipes VALUES (85, "Shorba Adas", "/assets/images/recipes/food/Shorba Adas.png", 1);
INSERT INTO Recipes VALUES (86, "Cauliflower Soup", "/assets/images/recipes/food/Cauliflower Soup.png", 1);
INSERT INTO Recipes VALUES (87, "Corn Soup", "/assets/images/recipes/food/Corn Soup.png", 1);
INSERT INTO Recipes VALUES (88, "Tabouleh", "/assets/images/recipes/food/Tabouleh.png", 1);
INSERT INTO Recipes VALUES (89, "Fattoush", "/assets/images/recipes/food/Fattoush.png", 1);

INSERT INTO Recipes VALUES (90, "Tiramisu", "/assets/images/recipes/dessert/Tiramisu.png", 2);
INSERT INTO Recipes VALUES (91, "Lotus Biscoff Cheesecake", "/assets/images/recipes/dessert/Lotus Biscoff Cheesecake.png", 2);
INSERT INTO Recipes VALUES (92, "Oreo Cheesecake", "/assets/images/recipes/dessert/Oreo Cheesecake.png", 2);
INSERT INTO Recipes VALUES (93, "Pistachio Cheesecake", "/assets/images/recipes/dessert/Pistachio Cheesecake.png", 2);
INSERT INTO Recipes VALUES (94, "Strawberry Cheesecake", "/assets/images/recipes/dessert/Strawberry Cheesecake.png", 2);
INSERT INTO Recipes VALUES (95, "San Sebastian Cheesecake", "/assets/images/recipes/dessert/San Sebastian Cheesecake.png", 2);
INSERT INTO Recipes VALUES (96, "Marzipan Cake", "/assets/images/recipes/dessert/Marzipan Cake.png", 2);
INSERT INTO Recipes VALUES (97, "Chocolate Cake", "/assets/images/recipes/dessert/Chocolate Cake.png", 2);
INSERT INTO Recipes VALUES (98, "Carrot Cake", "/assets/images/recipes/dessert/Carrot Cake.png", 2);
INSERT INTO Recipes VALUES (99, "Marble Cake", "/assets/images/recipes/dessert/Marble Cake.png", 2);
INSERT INTO Recipes VALUES (100, "Cassava Cake", "/assets/images/recipes/dessert/Cassava Cake.png", 2);
INSERT INTO Recipes VALUES (101, "Pan Di Spagna", "/assets/images/recipes/dessert/Pan Di Spagna.png", 2);
INSERT INTO Recipes VALUES (102, "Eclairs", "/assets/images/recipes/dessert/Eclairs.png", 2);
INSERT INTO Recipes VALUES (103, "Donuts", "/assets/images/recipes/dessert/Donuts.png", 2);
INSERT INTO Recipes VALUES (104, "Cinnamon Rolls", "/assets/images/recipes/dessert/Cinnamon Rolls.png", 2);
INSERT INTO Recipes VALUES (105, "Pancakes", "/assets/images/recipes/dessert/Pancakes.png", 2);
INSERT INTO Recipes VALUES (106, "Crepes", "/assets/images/recipes/dessert/Crepes.png", 2);
INSERT INTO Recipes VALUES (107, "Croissants", "/assets/images/recipes/dessert/Croissants.png", 2);
INSERT INTO Recipes VALUES (108, "Hlawet Aljibn", "/assets/images/recipes/dessert/Hlawet Aljibn.png", 2);
INSERT INTO Recipes VALUES (109, "Knafeh", "/assets/images/recipes/dessert/Knafeh.png", 2);
INSERT INTO Recipes VALUES (110, "Nammoura", "/assets/images/recipes/dessert/Nammoura.png", 2);
INSERT INTO Recipes VALUES (111, "Biko", "/assets/images/recipes/dessert/Biko.png", 2);
INSERT INTO Recipes VALUES (112, "Sheabiyat", "/assets/images/recipes/dessert/Sheabiyat.png", 2);
INSERT INTO Recipes VALUES (113, "Qatayef", "/assets/images/recipes/dessert/Qatayef.png", 2);
INSERT INTO Recipes VALUES (114, "Mshabbak", "/assets/images/recipes/dessert/Mshabbak.png", 2);
INSERT INTO Recipes VALUES (115, "Awwamat", "/assets/images/recipes/dessert/Awwamat.png", 2);
INSERT INTO Recipes VALUES (116, "Baklawa", "/assets/images/recipes/dessert/Baklawa.png", 2);
INSERT INTO Recipes VALUES (117, "Peanut Brittles", "/assets/images/recipes/dessert/Peanut Brittles.png", 2);
INSERT INTO Recipes VALUES (118, "Kaak", "/assets/images/recipes/dessert/Kaak.png", 2);
INSERT INTO Recipes VALUES (119, "Barazek", "/assets/images/recipes/dessert/Barazek.png", 2);
INSERT INTO Recipes VALUES (120, "Mamoul", "/assets/images/recipes/dessert/Mamoul.png", 2);
INSERT INTO Recipes VALUES (121, "Ghraibeh", "/assets/images/recipes/dessert/Ghraibeh.png", 2);
INSERT INTO Recipes VALUES (122, "Ghazal Albanat", "/assets/images/recipes/dessert/Ghazal Albanat.png", 2);
INSERT INTO Recipes VALUES (123, "Macaroons", "/assets/images/recipes/dessert/Macaroons.png", 2);
INSERT INTO Recipes VALUES (124, "Petit Four", "/assets/images/recipes/dessert/Petit Four.png", 2);
INSERT INTO Recipes VALUES (125, "Buchi", "/assets/images/recipes/dessert/Buchi.png", 2);
INSERT INTO Recipes VALUES (126, "Layalina", "/assets/images/recipes/dessert/Layalina.png", 2);
INSERT INTO Recipes VALUES (127, "Ras Alabd", "/assets/images/recipes/dessert/Ras Alabd.png", 2);
INSERT INTO Recipes VALUES (128, "Palitaw", "/assets/images/recipes/dessert/Palitaw.png", 2);
INSERT INTO Recipes VALUES (129, "Chocolate Salami", "/assets/images/recipes/dessert/Chocolate Salami.png", 2);
INSERT INTO Recipes VALUES (130, "Hububia", "/assets/images/recipes/dessert/Hububia.png", 2);
INSERT INTO Recipes VALUES (131, "Meghli", "/assets/images/recipes/dessert/Meghli.png", 2);
INSERT INTO Recipes VALUES (132, "Rizz Bhalib", "/assets/images/recipes/dessert/Rizz Bhalib.png", 2);
INSERT INTO Recipes VALUES (133, "Custard", "/assets/images/recipes/dessert/Custard.png", 2);
INSERT INTO Recipes VALUES (134, "Geleh", "/assets/images/recipes/dessert/Geleh.png", 2);
INSERT INTO Recipes VALUES (135, "Panna Cotta", "/assets/images/recipes/dessert/Panna Cotta.png", 2);
INSERT INTO Recipes VALUES (136, "Mrabba Alkaraa", "/assets/images/recipes/dessert/Mrabba Alkaraa.png", 2);
INSERT INTO Recipes VALUES (137, "Halo Halo", "/assets/images/recipes/dessert/Halo Halo.png", 2);
INSERT INTO Recipes VALUES (138, "Ice Cream", "/assets/images/recipes/dessert/Ice Cream.png", 2);
