Vue.config.devtools = true;

class Errors {
    constructor () {
        this.errors = {};
    }

    get(field) {
        
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors.errors;
    }

    clear(field) {
        delete this.errors[field];
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}

new Vue({
    el: '#app',
    data: {
        title: '',
        description: '',
        errors: new Errors()
    },
    methods: {
        onSubmit () {
            let hostUrl = window.location.href;
            axios.post(hostUrl, {
                'title': this.title,
                'description': this.description
            })
            .then(response => {
                
                alert('success');
                this.title = '';
                this.description = '';
            })
            .catch(error => {
                this.errors.record(error.response.data);
            })
        }
    }
});
