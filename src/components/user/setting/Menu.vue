<template>
    <div class="a-s-fixed">
        <div class="txt-site txt-thin txt-11 txt-primary margin-5px">
            Setting
        </div>
        <div class="navigator nav-theme-5 nav-full">
            <ul>
                <router-link :to="{name: 'user-setting-basic'}">
                    <li :class="basic">
                        Basic Informations
                    </li>
                </router-link>
            </ul>
            <ul>
                <router-link :to="{name: 'user-setting-profile'}">
                    <li :class="profile">
                        Profile
                    </li>
                </router-link>
            </ul>
            <ul>
                <router-link :to="{name: 'user-setting-password'}">
                    <li :class="password">
                        Password
                    </li>
                </router-link>
            </ul>
        </div>


        <div class="txt-site txt-thin txt-11 txt-primary margin-5px">
            Others
        </div>
        <div class="navigator nav-theme-5 nav-full">
            <ul>
                <li>
                    <span class="txt-site txt-danger">Delete Account</span>
                </li>
                <li @click="$logOut()">
                    <span class="txt-site txt-init">Logout</span>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            basic: '',
            profile: '',
            password: '',
        }
    },
    created: function () {
        if (this.$route.name == 'user-setting-basic' || this.$route.name == 'user-setting') {
            this.basic = 'active';
            this.profile = '';
            this.password = '';
        }
        if (this.$route.name == 'user-setting-profile') {
            this.basic = '';
            this.profile = 'active';
            this.password = '';
        }
        if (this.$route.name == 'user-setting-password') {
            this.basic = '';
            this.profile = '';
            this.password = 'active';
        }
    }
}
</script>

