define ["logger"], (log)->

	coffeelogger = (arg)-> log arg+" PRINTED BY COFFEESCRIPT! :)"

	# we export a simple test function, which will show that the code has been successfully compiled to coffeescript.
	-> coffeelogger "some log text"