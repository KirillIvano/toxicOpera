class Toggle {
    constructor({
        el,
        defaultState,
        onClick,
        label,
    }) {
        this.el = el;

        this.button = el.getElementsByClassName('toggle')[0];
        this.label = el.getElementsByClassName('toggleLabel')[0];
        
        this.setLabel(label);
        this.isActivated = defaultState;
        if (defaultState) {
            this.activate();
        } else {
            this.deactivate();
        }
        
        
        el.addEventListener('click', () => {
            onClick(this);
        });
    }

    disable() {
        this.button.setAttribute('disabled', 'true');
    }
    enable() {
        this.button.removeAttribute('disabled');
    }

    activate() {
        this.isActivated = true;
        this.button.classList.add('active');
    }
    deactivate() {
        this.isActivated = false;
        this.button.classList.remove('active');
    }

    setLabel(text) {
        this.label.innerText = text || '';
    }
}

export default Toggle;