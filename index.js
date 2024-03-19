const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const psst = require("tea-psst-yippee"),
	cheery = require("x-cheery-messenger"),
	which = require("x-which-frequent"),
	beneath = require("x-beneath-ill-fated"),
	first = require("x-first-boohoo"),
	quiz = require("tea-quiz-commit"),
	worse = require("x-worse-clearly"),
	numeric = require("x-numeric-police"),
	amend = require("x-amend-beyond"),
	gosh = require("x-gosh-where"),
	blah = require("tea-blah-concede"),
	pfft = require("tea-pfft-along"),
	dismiss = require("x-dismiss-across"),
	beside = require("tea-beside-yowza"),
	unearth = require("tea-unearth-promptly"),
	indeed = require("tea-indeed-workforce"),
	however = require("tea-however-sleep"),
	rarely = require("x-rarely-opposite"),
	begonia = require("tea-begonia-instead"),
	lambkin = require("tea-lambkin-while"),
	infect = require("x-infect-likewise"),
	anguish = require("x-anguish-notarize"),
	male = require("tea-male-zowie"),
	slobber = require("tea-slobber-cucumber"),
	attack = require("x-attack-yippee"),
	truly = require("tea-truly-smooth"),
	playground = require("twt-playground"),
	repent = require("tea-repent-scorn"),
	broil = require("x-broil-gadzooks"),
	despite = require("x-despite-cruelly"),
	unlike = require("tea-unlike-often"),
	wearily = require("tea-wearily-well-lit"),
	about = require("tea-about-minor"),
	fare = require("x-fare-barring"),
	prod = require("x-prod-yippee"),
	whereas = require("tea-whereas-safely"),
	fondue = require("x-fondue-indolent");

const USERNAME = "emily82",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
