"use strict";

(function(scope) {
    // Observable - adds behavior to be observed and notified of events
    function Observable() {
        this.dependents = [];
        this._logObservableEvent("Initialized observer: ", this);
    };

    Observable.prototype._logObservableEvent = function() {
        // logging disabled by default
        //console.log(arguments);
    };

    Observable.prototype.addObserver = function(obj) {
        // Make sure this list doesn't have dups
        for(var i=0; i<this.dependents.length; i++) {
            if(this.dependents[i] === obj) {
                this._logObservableEvent("Skipped adding observer because already in list: ", [this, obj]);
                return;
            }
        }
        this.dependents.push(obj);
        this._logObservableEvent("Added observer: ", [this, obj]);
    };

    Observable.prototype.removeObserver = function(obj) {
        for(var i = 0; i < this.dependents.length; i++) {
          if( this.dependents[i] === obj ) {
            this.dependents.splice(i, 1);
            this._logObservableEvent("Removed observer: ", [this, obj]);
            return true;
          }
        }
        return false;
    };

    Observable.prototype.notify = function() {
        var args = Array.prototype.slice.call(arguments, 0); //copy args
        for(var i = 0; i < this.dependents.length; i++) {
            this._logObservableEvent("Notifying: ", [this, this.dependents[i], args]);
            this.dependents[i].update.apply(this.dependents[i], args);
        }
    };

    Observable.prototype.update = function() {
        this._logObservableEvent("Observed", [this, arguments]);
    };
    
    scope.Observable = Observable;
})(window);
