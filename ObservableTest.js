"use strict";

(function(){
    
    QUnit.test("Observable test", function( assert ) {
        var eventsReceived = [];
        var observable = new window.Observable();
        
        var observer = {};
        observer.update = function() {
            // When an this observer receives an event, add it to the list of events
            eventsReceived.push(arguments);
        };
        
        // Make me an observer
        observable.addObserver(observer);
        // Confirm that observer was added
        assert.ok(observable.dependents.length == 1, "Check observer added");
        
        // Trigger an event
        observable.notify("EventName", "some other arg", 1);
        // Confirm that we recieve the event including all of the arguments
        assert.ok(eventsReceived[0][0] == "EventName", "Check 1st arg");
        assert.ok(eventsReceived[0][1] == "some other arg", "Check 2nd arg");
        assert.ok(eventsReceived[0][2] == 1, "Check 3rd arg");
        
        // Remove me as an observer
        observable.removeObserver(observer);
        // Confirm that observer was removed
        assert.ok(observable.dependents.length == 0, "Check observer removed");
    });
    
})();
