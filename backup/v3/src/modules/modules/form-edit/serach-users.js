import Vue from "vue";
import Axios from "axios";
import addUser from "./add-user";

const CancelToken = Axios.CancelToken;
var cancel;

const searchUsers = (moduleId) => {
    var app = new Vue({
        el: '#user-modules',
        data() {
            return { users: [] }
        },
        methods: {
            add: function (userId) {
                addUser(userId, moduleId, app)
            },
            search: function (e) {
                if (cancel != undefined) { cancel() }
                ajax({
                    url: `usersByName/${e.target.value || 'false'}`, cancelToken: new CancelToken(function executor(c) {
                        cancel = c
                    })
                })
                    .then(function (data) { this.users = data.data })
                    .catch(console.log)
            }
        },
        mounted() {
            ajax({ url: `usersByName/false` })
                .then(function (data) { app.users = data.data })
                .catch(console.log)
        }
    })
}
export default searchUsers