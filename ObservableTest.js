"use strict";

(function(){
    
    QUnit.test("Observable test", function( assert ) {
        var eventsReceived = [];
        
        // Create an object to be observed
        var observable = new window.Observable();
        
        // Create an observer that understands update()
        var observer = {};
        observer.update = function() {
            // When an this observer receives an event, add it to the list of events
            eventsReceived.push(arguments);
        };
        
        // Add the observer
        observable.addObserver(observer);
        
        // Confirm that the observer was added
        assert.ok(observable.dependents.length == 1, "Check observer added");
        
        // Trigger an event
        observable.notify("EventName", "some other arg", 1);
        
        // Confirm that we recieved the event including all of the arguments
        assert.ok(eventsReceived[0][0] == "EventName", "Check 1st arg");
        assert.ok(eventsReceived[0][1] == "some other arg", "Check 2nd arg");
        assert.ok(eventsReceived[0][2] == 1, "Check 3rd arg");
        
        // Remove the observer
        observable.removeObserver(observer);
        
        // Confirm the observer was removed
        assert.ok(observable.dependents.length == 0, "Check observer removed");
    });
    
})();
