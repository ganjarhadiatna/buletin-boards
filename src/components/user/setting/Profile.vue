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
                            Profile
                        </h1>
                    </div>

                    <form 
                        id="form-edit-profile" 
                        enctype="multipart/form-data"
                        @submit.prevent="doSave">
                        
                        <div class="a-s-change" id="change">
                            <div 
                                class="foto image image-100px image-circle" 
                                id="place-picture" 
                                :style="{'background-image': 'url('+pp.foto+')'}"></div>
                            <div id="btn-save-foto">
                                <input 
                                    type="file" 
                                    name="change-picture" 
                                    id="change-picture"
                                    ref="file"
                                    accept="image/*"
                                    @change="rvwFoto">
                                <label for="change-picture">
                                    <div class="btn btn-no-pad btn-grey3-color btn-div" >
                                        <span class="ttl">Change Picture</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Full name
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="text" 
                                    name="edit-name" 
                                    class="txt txt-primary-color" 
                                    id="edit-name" 
                                    required="true" 
                                    v-model="pp.name"
                                    placeholder="Full Name">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Username
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="text" 
                                    name="edit-username" 
                                    class="txt txt-primary-color" 
                                    id="edit-username" 
                                    required="true" 
                                    v-model="pp.username"
                                    placeholder="Username">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                E-mail address
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="text" 
                                    name="edit-email" 
                                    class="txt txt-primary-color" 
                                    id="edit-email" 
                                    required="true" 
                                    v-model="pp.email"
                                    placeholder="Email">
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
            urlSave: this.baseUrl+'/api/me/profile?token='+this.$cookie.get('jwt'),
            pp: {
                foto: '',
                file: '',
                name: '',
                username: ''
            },
            placeImage: '',
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
        rvwFoto: function () {
            var vm = this;
            var OFReader = new FileReader();
            OFReader.readAsDataURL(document.getElementById("change-picture").files[0]);
            OFReader.onload = function (oFREvent) {
                vm.pp.foto = oFREvent.target.result;
            }
            this.pp.file = this.$refs.file.files[0];
            
        },
        doSave: function () {
            let formData = new FormData();
            formData.append('foto', this.pp.file);
            formData.append('name', this.pp.name);
            formData.append('username', this.pp.username);
            
            this.$openMessageLoading('open', 'Saving informations');
            axios.post(this.urlSave,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then(response => {
                this.$openMessageLoading('hide');
                if (response.data.status == 'successfull') {
                    this.$openMessageOk(response.data.message);
                    this.$cookie.set('foto', response.data.foto, 2);
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
            //         this.pp.name = response.data[0].name;
            //         this.pp.username = response.data[0].username;
            //         this.pp.foto = this.urlThumbnailProfile+response.data[0].foto;
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

