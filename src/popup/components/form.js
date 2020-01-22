class Form {
    constructor({
        el,
        onSubmit,
    }) {
        this.el = el;
        this.input = el.getElementsByClassName('userId')[0];
        this.submitBtn = el.getElementsByClassName('submit')[0];
        this.preloader = document.getElementById('preloader');

        if (!this.input || !this.submitBtn) {
            throw new Error('No input or submit button in layout');
        }

        this.removeValidation = this.removeValidation.bind(this);
        this.removeLoading = this.removeLoading.bind(this);

        this.el.addEventListener('submit', onSubmit);
    }

    removeValidation() {
        this.input.classList.remove('invalid');
        this.input.removeEventListener('input', this.removeValidation);
    }
    
    addValidation() {
        this.input.classList.add('invalid');
        this.input.addEventListener('input', this.removeValidation);
    }
    
    setLoading() {
        this.el.classList.add('disabled');
        this.preloader.classList.remove('disabled');
    }
    
    removeLoading() {
        this.el.classList.remove('disabled');
        this.preloader.classList.add('disabled');
    }

    getInputValue() {
        return this.input.value;
    }
}

export default Form;

