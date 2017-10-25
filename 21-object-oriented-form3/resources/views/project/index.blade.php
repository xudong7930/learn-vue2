<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>some title</title>
    <link rel="stylesheet" href="https://ehd4.f3322.net/youtube/bulma060/bulma.css">
</head>
<body>
    <div id="app" class="container">
        <h1>all projects</h1>
        <ul>
        @foreach($projects as $project)
            <li>{{$project->title}}</li>
        @endforeach
        </ul>

        <form method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="field">
                <label class="label">title</label>
                <div class="control">
                    <input class="input" type="text" name="title" placeholder="your user name or email" v-model="form.title"> 
                </div>
                <p class="help is-danger" v-if="form.errors.has('title')" v-text="form.errors.get('title')"></p>
            </div>

            <div class="field">
                    <label class="label">text</label>
                    <div class="control">
                        <input class="input" type="text" name="description" v-model="form.description"> 
                    </div>
                    <p class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></p>
            </div>

            <div class="control">
                <button type="submit" class="button is-primary" :disabled="form.errors.any()">Submit</button>
            </div>
        </form>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.min.js"></script>
    <script src="{{asset('js/abb.js')}}"></script>
</body>
</html>
