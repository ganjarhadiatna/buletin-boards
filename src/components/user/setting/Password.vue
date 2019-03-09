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
                            Password
                        </h1>
                    </div>

                    <form action="#">

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Old password
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="password" 
                                    name="old-password" 
                                    class="txt txt-primary-color" 
                                    id="old-password" 
                                    required="true" 
                                    placeholder="Old password">
                            </div>
                        </div>

                        <div class="padding-5px border-bottom"></div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                New password
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="password" 
                                    name="new-password" 
                                    class="txt txt-primary-color" 
                                    id="new-password" 
                                    required="true" 
                                    placeholder="New password">
                            </div>
                        </div>

                        <div class="app-form">
                            <div class="a-f-ttl">
                                Confirm password
                            </div>
                            <div class="a-f-input">
                                <input 
                                    type="password" 
                                    name="confirm-password" 
                                    class="txt txt-primary-color" 
                                    id="confirm-password" 
                                    required="true" 
                                    placeholder="Confirm password">
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
import SettingMenu from '@/components/user/setting/Menu'

export default {
    data () {
        return {
            loading: false,
            frameProfile: true,
            emptyProfile: false,
            message: ''
        }
    },
    components: {
        'frame-menu-setting': SettingMenu,
    }
}
</script>
