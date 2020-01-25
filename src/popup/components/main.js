import Toggle from './toggle';
import Form from './form';

import {
    getApplicationActivity,
    setApplicationActivity,
    getFullHiding,
    setFullHiding,
    setErasedUserId
} from './../services';

class Main {
    constructor() {
        this.applicationActivityToggle = new Toggle({
            el: document.getElementById('activityToggle'),
            defaultState: true,
            onClick: this.toggleApplicationState.bind(this),
            label: 'Выключить/Включить',
        });

        this.fullHidingToggle = new Toggle({
            el: document.getElementById('fullHidingToggle'),
            defaultState: true,
            onClick: this.toggleFullHiding.bind(this),
            label: 'Прятать все элементы.',
        });

        this.form = new Form({
            el: document.getElementById('popupForm'),
            onSubmit: this.submitIdHandler.bind(this),
        });

        getApplicationActivity(
            isActive => isActive ?
                this.applicationActivityToggle.activate() :
                this.applicationActivityToggle.deactivate()
        );

        getFullHiding(
            fullHiding => fullHiding ?
                this.fullHidingToggle.activate() :
                this.fullHidingToggle.deactivate()
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
        this.applicationActivityToggle.disable();
    
        getApplicationActivity(isActive => {
            isActive ?
                this.applicationActivityToggle.deactivate() :
                this.applicationActivityToggle.activate();

            setApplicationActivity(!isActive, () => this.applicationActivityToggle.enable());
        });
    }

    toggleFullHiding() {
        this.fullHidingToggle.disable();

        getFullHiding(fullHiding => {
            fullHiding ?
                this.fullHidingToggle.deactivate() :
                this.fullHidingToggle.activate();

            setFullHiding(!fullHiding);
            this.fullHidingToggle.enable();
        });
    }
}

export default Main;