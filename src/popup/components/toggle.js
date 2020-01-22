class Toggle {
    constructor({
        el,
        defaultState,
        onClick,
    }) {
        this.el = el;

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
        this.el.setAttribute('disabled', 'true');
    }
    enable() {
        this.el.removeAttribute('disabled');
    }

    activate() {
        this.isActivated = true;
        this.el.classList.add('active');
    }
    deactivate() {
        this.isActivated = false;
        this.el.classList.remove('active');
    }
}

export default Toggle;