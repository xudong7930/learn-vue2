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

    post(url) {
        return this.submit('post', url);
    }

    delete(url) {
        return this.submit('delete', url);
    }

    submit (requestType, url) {

        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
            .then(response => {
                this.onSuccess(response.data);
                resolve(response.data);
            })
            .catch(error => {
                this.onFail(error.response.data);
                reject(error.response.data);
            });
        });
    }

    onSuccess(data) {
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error);
    }

    data() {
        // let data = Object.assign({}, this);
        // delete data.originalData;
        // delete data.errors;
        // return data;

        
        let data = {};
        for(let property in this.originalData) {
            data[property] = this[property]
        }
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
            this.form.submit('post', hostUrl)
                .then(data => {
                    alert("project created");
                })
                .catch(error => {
                    console.dir(error);
                    // alert(error);
                });


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
