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

        <form method="post" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
            <div class="field">
                <label class="label">title</label>
                <div class="control">
                    <input class="input" type="text" name="title" placeholder="your user name or email" v-model="title"> 
                </div>
                <p class="help is-danger" v-if="errors.has('title')" v-text="errors.get('title')"></p>
            </div>

            <div class="field">
                    <label class="label">text</label>
                    <div class="control">
                        <input class="input" type="text" name="description" v-model="description"> 
                    </div>
                    <p class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></p>
            </div>

            <div class="control">
                <button type="submit" class="button is-primary" :disabled="errors.any()">Submit</button>
            </div>
        </form>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.2/vue.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.0/axios.min.js"></script>
    <script src="{{asset('js/abb.js')}}"></script>
</body>
</html>
