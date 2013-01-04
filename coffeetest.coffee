define ["logger"], (log)->

	coffeelogger = (arg)->
		log arg+" PRINTED BY COFFEESCRIPT! :)"

	-> coffeelogger "some log text"