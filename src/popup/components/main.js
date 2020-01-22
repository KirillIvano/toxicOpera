import Toggle from './toggle';
import Form from './form';

import {
    getApplicationActivity,
    setApplicationActivity,
    setErasedUserId
} from './../services';

class Main {
    constructor() {
        this.toggle = new Toggle({
            el: document.getElementById('toggle'),
            defaultState: false,
            onClick: this.toggleApplicationState.bind(this),
        });
        
        this.form = new Form({
            el: document.getElementById('popupForm'),
            onSubmit: this.submitIdHandler.bind(this),
        });

        getApplicationActivity(
            isActive => isActive ?
                this.toggle.activate() :
                this.toggle.deactivate()
        );
    }

    submitIdHandler(e) {
        e.preventDefault();
        
        const value = this.form.getInputValue();
        if (!value) {
            this.form.addValidation();
            return;
        }
    
        this.form.setLoading();
        setErasedUserId(value, this.form.removeLoading);
    }

    toggleApplicationState() {
        this.toggle.disable();
    
        getApplicationActivity((isActive) => {
            isActive ? this.toggle.deactivate() : this.toggle.activate();
            setApplicationActivity(isActive);
            this.toggle.enable();
        });
    }
}

export default Main;