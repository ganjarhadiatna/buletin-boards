<template>
    <div class="app-fixed">

        <div class="card-auth">
            <div class="c-a-top">
                <router-link :to="{name: 'home'}">
					<img src="@/assets/img/5.png" class="a-h-logo" style="width: 70%;">
				</router-link>
            </div>
            <div class="c-a-mid">
                <form @submit.prevent="doLogin()">

                    <div class="margin-10px" v-if="frameErr">
                        <div class="txt-site txt-11 txt-danger txt-bold">
                            {{ message }}
                        </div>
                    </div>

                    <div class="c-a-block">
                        <input 
                            type="email" 
                            name="email"
                            class="txt txt-primary-color"
                            placeholder="your email"
                            v-model="user.email"
                            required>
                        <div v-if="frameErrEmail">
                            <div class="txt-site txt-11 txt-danger txt-bold" >
                                {{ messageEmail }}
                            </div>
                        </div>
                    </div>
                    <div class="c-a-block">
                        <input 
                            type="password" 
                            class="txt txt-primary-color"
                            placeholder="password"
                            v-model="user.password"
                            required>
                        <div v-if="frameErrPass">
                            <div class="txt-site txt-11 txt-danger txt-bold">
                                {{ messagePass }}
                            </div>
                        </div>
                    </div>
                    <div class="padding-5px"></div>
                    <div class="c-a-block">
                        <input 
                            type="submit" 
                            :value="valLogin" 
                            :disabled="disLogin"
                            class="btn btn-main-color btn-width-all">
                    </div>
                    <div class="c-a-block">
                        <router-link :to="{name: 'register'}">
                            <input 
                                type="button" 
                                value="Create your buletin board"
                                class="btn btn-main2-color btn-width-all">
                        </router-link>
                    </div>
                </form>
            </div>
            <!-- <div class="c-a-bot"></div> -->
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            url: this.$baseUrl+'/api/auth/login',
            message: '',
            messageEmail: '',
            messagePass: '',
            valLogin: 'Login',
            disLogin: false,
            frameErr: false,
            frameErrEmail: false,
            frameErrPass: false,
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        doLogin () {
            var vm = this;
            this.frameErr = false;
            this.frameErrEmail = false;
            this.frameErrPass = false;
            this.valLogin = 'Please Wait...';
            this.disLogin = true;

            // true : dont forget to delete
            vm.valLogin = 'Success';
            vm.disLogin = true;
            this.$cookie.set('jwt', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa', 7);
            this.$cookie.set('id', '1', 7);
            this.$cookie.set('name', 'Ganjar Hadiatna', 7);
            this.$cookie.set('username', 'ganjar18', 7);
            this.$cookie.set('foto', '', 7);
            window.location = vm.$initUrl;


            // axios.post(this.url, {
            //     'email': this.user.email,
            //     'password': this.user.password
            // })
            // .then(response => {
            //     if (response.data.status == 'unauthorized') 
            //     {
            //         vm.frameErr = true;
            //         vm.message = e.response.responseText;
            //         vm.valLogin = 'Try Again';
            //         vm.disLogin = false;
            //     }
            //     if (response.data.status == 'invalide') 
            //     {
            //         vm.valLogin = 'Try again';
            //         vm.disLogin = false;
            //         if (response.data.message.password) 
            //         {
            //             vm.frameErrPass = true;
            //             vm.messagePass = response.data.message.password[0];
            //         }
            //         if (response.data.message.email) 
            //         {
            //             vm.frameErrEmail = true;
            //             vm.messageEmail = response.data.message.email[0];
            //         }
            //     }
            //     if (response.data.status == 'success') 
            //     {
            //         vm.valLogin = 'Success';
            //         vm.disLogin = true;
            //         this.$cookie.set('jwt', response.data.me.access_token, 7);
            //         this.$cookie.set('id', response.data.me.id, 7);
            //         this.$cookie.set('name', response.data.me.name, 7);
            //         this.$cookie.set('username', response.data.me.username, 7);
            //         this.$cookie.set('foto', response.data.me.foto, 7);
            //         window.location = vm.$initUrl;
            //         // console.log(response.data);
                    
            //     }
            // })
            // .catch(e => {
            //     //main error
            //     if (e.response.status == 405) 
            //     {
            //         var msg = e.response.statusText;
            //     }
            //     // if (e.response.data.status) 
            //     // {
            //     //     var msg = 'Please check back your email or password';
            //     // } else {
            //     //     var msg = e.response.data.statusText;
            //     // }
            //     vm.frameErr = true;
            //     vm.message = msg;
            //     vm.valLogin = 'Try Again';
            //     vm.disLogin = false;
            //     console.log(e.response);
                
            // });
        }
    },
    created: function () {
        if (this.$cookie.get('jwt')) 
        {
            this.$router.push('/');
        }
    },
    beforeCreate: function () {
        if (this.$cookie.get('jwt')) 
        {
            this.$router.push('/');
        }
    }
}
</script>

