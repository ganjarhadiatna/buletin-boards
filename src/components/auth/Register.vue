<template>
    <div class="app-fixed">

        <div class="card-auth">
            <div class="c-a-top">
                <router-link :to="{name: 'home'}">
					<img src="@/assets/img/5.png" class="a-h-logo" style="width: 70%;">
				</router-link>
            </div>
            <div class="c-a-mid">
                <form @submit.prevent="doRegister()">
                    
                    <div class="margin-10px" v-if="frameErr">
                        <div class="txt-site txt-11 txt-danger txt-bold">
                            {{ message }}
                        </div>
                    </div>

                    <div class="c-a-block">
                        <input 
                            type="text" 
                            class="txt txt-primary-color"
                            placeholder="Full Name"
                            v-model="user.name"
                            required>
                        <div v-if="frameErrName">
                            <div class="txt-site txt-11 txt-danger txt-bold">
                                {{ messageName }}
                            </div>
                        </div>
                    </div>
                    <div class="c-a-block">
                        <input 
                            type="email" 
                            class="txt txt-primary-color"
                            placeholder="E-mail Address"
                            v-model="user.email"
                            required>
                        <div v-if="frameErrEmail">
                            <div class="txt-site txt-11 txt-danger txt-bold">
                                {{ messageEmail }}
                            </div>
                        </div>
                    </div>
                    <div class="c-a-block">
                        <input 
                            type="password" 
                            class="txt txt-primary-color"
                            placeholder="Create Password"
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
                            :value="valRegister" 
                            :disabled="disRegister"
                            class="btn btn-main-color btn-width-all">
                    </div>
                    <router-link :to="{name: 'login'}">
                        <div class="c-a-block">
                            <input 
                                type="button" 
                                value="Login to account"
                                class="btn btn-main2-color btn-width-all">
                        </div>
                    </router-link>
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
            url: this.$baseUrl+'/api/auth/register',
            message: '',
            messageName: '',
            messageEmail: '',
            messagePass: '',
            valRegister: 'Register',
            disRegister: false,
            frameErr: false,
            frameErrName: false,
            frameErrEmail: false,
            frameErrPass: false,
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        doRegister () {
            var vm = this;
            this.frameErr = false;
            this.frameErrName = false;
            this.frameErrEmail = false;
            this.frameErrPass = false;
            this.valRegister = 'Please Wait...';
            this.disRegister = true;
            axios.post(this.url, {
                'name': this.user.name,
                'email': this.user.email,
                'password': this.user.password
            })
            .then(response => {
                if (response.data.status == 'unlogin') 
                {
                    vm.frameErr = true;
                    vm.message = e.response.responseText;
                    vm.valRegister = 'Success';
                    vm.disRegister = true;
                }
                if (response.data.status == 'unauthorized') 
                {
                    vm.frameErr = true;
                    vm.message = e.response.responseText;
                    vm.valRegister = 'Try Again';
                    vm.disRegister = false;
                }
                if (response.data.status == 'invalide') 
                {
                    vm.valRegister = 'Try again';
                    vm.disRegister = false;
                    if (response.data.message.password) 
                    {
                        vm.frameErrPass = true;
                        vm.messagePass = response.data.message.password[0];
                    }
                    if (response.data.message.email) 
                    {
                        vm.frameErrEmail = true;
                        vm.messageEmail = response.data.message.email[0];
                    }
                    if (response.data.message.name) 
                    {
                        vm.frameErrName = true;
                        vm.messageName = response.data.message.name[0];
                    }
                }
                if (response.data.status == 'success') 
                {
                    vm.valRegister = 'Success';
                    vm.disRegister = true;
                    this.$cookie.set('jwt', response.data.access_token, 7);
                    this.$cookie.set('id', response.data.me.original.id, 7);
                    this.$cookie.set('name', response.data.me.original.name, 7);
                    this.$cookie.set('username', response.data.me.original.username, 7);
                    this.$cookie.set('foto', response.data.me.original.foto, 7);
                    window.location = vm.$initUrl;
                    // console.log(response.data);

                }
            })
            .catch(e => {
                //main error
                vm.frameErr = true;
                vm.message = e.response.responseText;
                vm.valRegister = 'Try Again';
                vm.disRegister = false;
                console.log(e.response);
            });
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
