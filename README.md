# javascript-observable

# How To Use
- Create a class that is a subclass of Observable.  Now any javascript object that implements update() can observe your subclass.
- To notify your observers of something, call notify().  I recommend making the 1st argument an event name
- Observers can implement update() and check the first argument to see if the event they care about is the event that happened.
	- If they care about that event, they can do something
	- If they don't care about that event, they can do nothing and ignore it

# Test Case Included
- see ObservableTest.test1()

