<template>
    <div>
        <div class="app-setting">

            <div class="col-1">
                <frame-menu-setting></frame-menu-setting>
            </div>

            <div class="col-2">
                
                <div v-if="loading">
                    <frame-loading></frame-loading>
                </div>

                <div v-if="emptyProfile">
                    <div class="frame-empty">
                        <div class="txt-site txt-big txt-primary">
                            <div class="fa fa-lg fa-thermometer-empty"></div>
                        </div>
                        <div class="ttl padding-15px">{{ message }}</div>
                    </div>
                </div>

                <div v-if="frameProfile">
                    <div class="margin-10px">
                        <h1 class="txt-site txt-small txt-main txt-bold">
                            Basic Informations
                        </h1>
                    </div>

                    <form 
                        id="form-edit-profile" 
                        @submit.prevent="doSave">

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Category
                            </div>
                            <div class="a-f-input">
                                <select 
                                    name="ctr" 
                                    id="ctr" 
                                    class="slc slc-primary-color">
                                    <option 
                                        value="1" 
                                        v-for="(item, index) in 10" 
                                        :key="index">
                                        Category 1
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                About you
                            </div>
                            <div class="a-f-input">
                                <textarea 
                                    class="txt edit-text txt-primary-color" 
                                    id="edit-about" 
                                    v-model="pp.about"
                                    placeholder="About you"></textarea>
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Phone number
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="url" 
                                    name="phone-number" 
                                    class="txt txt-primary-color" 
                                    id="phone-number" 
                                    v-model="pp.phone_number"
                                    placeholder="+62-8888-8888-8888">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Your website
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="url" 
                                    name="edit-website" 
                                    class="txt txt-primary-color" 
                                    id="edit-website" 
                                    v-model="pp.website"
                                    placeholder="https://link.com">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Address
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="url" 
                                    name="address" 
                                    class="txt txt-primary-color" 
                                    id="address" 
                                    v-model="pp.website"
                                    placeholder="Jl. ...">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-input a-f-right">
                                <input 
                                    type="button" 
                                    name="edit-cancel" 
                                    class="btn btn-grey2-color" 
                                    value="Cancel"
                                    @click="$goBack()">
                                <input 
                                    type="submit" 
                                    name="edit-save" 
                                    class="btn btn-orange-color" 
                                    value="Save">
                            </div>
                        </div>


                    </form>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
// import FrameLoading from '../../main/FrameLoading';
import SettingMenu from '@/components/user/setting/Menu'

export default {
    data () {
        return {
            url: this.baseUrl+'/api/user/'+this.$cookie.get('username'),
            urlSave: this.baseUrl+'/api/me/basic?token='+this.$cookie.get('jwt'),
            pp: {
                email: '',
                about: '',
                website: ''
            },
            loading: false,
            frameProfile: false,
            emptyProfile: false,
            message: ''
        }
    },
    components: {
        'frame-menu-setting': SettingMenu,
        // 'frame-loading': FrameLoading,
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        doSave: function () {
            this.$openMessageLoading('open', 'Saving informations');
            axios.post(this.urlSave, {
                'email': this.pp.email,
                'about': this.pp.about,
                'website': this.pp.website
            })
            .then(response => {
                this.$openMessageLoading('hide');
                if (response.data.status == 'successfull') {
                    this.$openMessageOk(response.data.message);
                } else {
                    this.$openMessageOk(response.data.message);
                }
            })
            .catch(e => {
                this.$openMessageLoading('hide');
                this.$openMessageOk(e.response.data.error);
            });
        },
        fetchData: function () {
            this.frameProfile = true;
            this.emptyProfile = false;
            // this.frameProfile = false;
            // this.emptyProfile = false;
            // this.loading = true;
            // axios.get(this.url)
            // .then(response => {
            //     if (response.data && response.data.length) {
            //         this.frameProfile = true;
            //         this.pp.email = response.data[0].email;
            //         this.pp.about = response.data[0].about;
            //         this.pp.website = response.data[0].website;
            //     } else {
            //         this.message = 'User Empty';
            //         this.emptyProfile = true;
            //     }
            //     this.loading = false;
            // })
            // .catch(e => {
            //     this.message = 'There is an error';
            //     this.loading = false;
            // });
        }
    }
}
</script>
