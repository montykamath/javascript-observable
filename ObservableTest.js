
// ObservableTest - test case that tests the bahavior of Observable objects
function ObservableTest() {
    this.eventsReceived = [];
};

ObservableTest.prototype.test1 = function() {
    // Run this test method by adding this to your html:
    //     <script type-"text/javascript">
    //          (new ObservableTest()).test1();
    //     </script>
   
    // Instantiate an observable
    var observable = new Observable();
    
    // Make me an observer
    observable.addObserver(this);
    // Confirm that observer was added
    this.assert(observable.dependents.length == 1, "Observer not added");
    
    // Trigger an event
    observable.notify("EventName", "some other arg", 1);
    // Confirm that we recieve the event including all of the arguments
    this.assert(this.eventsReceived[0][0] == "EventName", "1st argument doesn't match");
    this.assert(this.eventsReceived[0][1] == "some other arg", "2nd argument doesn't match");
    this.assert(this.eventsReceived[0][2] == 1, "3rd argument doesn't match");
    
    // Remove me as an observer
    observable.removeObserver(this);
    // Confirm that observer was removed
    this.assert(observable.dependents.length == 0, "Observer not removed");
};

ObservableTest.prototype.assert = function(condition, message) {
    // Assert that the condition is true.  If it is false, throw an exception with the message
    if (!condition) {
        throw message || "Assertion failed";
    }
};

ObservableTest.prototype.update = function() {
    // When an observable notifies us about an event, 
    // just add it to our list of events so we can verify it later
    this.eventsReceived.push(arguments);
};
