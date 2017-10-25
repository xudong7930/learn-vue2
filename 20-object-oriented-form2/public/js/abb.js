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

class Form {
    constructor(data) {
        this.originalData = data;
        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    submit (requestType, url) {
        axios[requestType](url, this.data())
            .then(this.onSuccess.bind(this))
            .catch(this.onFail.bind(this));
    }

    onSuccess(response) {
        alert(response.data.message);
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.response.data);
    }

    data() {
        let data = Object.assign({}, this);
        delete data.originalData;
        delete data.errors;

        return data;
    }
}

new Vue({
    el: '#app',
    data: {
        form: new Form({
            title: '',
            description: ''
        }),
    },
    methods: {
        onSubmit () {
            let hostUrl = window.location.href;
            this.form.submit('post', hostUrl);


            // let hostUrl = window.location.href;
            // axios.post(hostUrl, {
            //     'title': this.form.title,
            //     'description': this.form.description
            // })
            // .then(response => {
                
            //     alert('success');
            //     form.errors.clear();
            //     form.reset();
            // })
            // .catch(error => {
            //     this.form.errors.record(error.response.data);
            // })
        }
    }
});
