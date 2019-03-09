<template>
    <div>
        <div class="app-setting">

            <div class="col-1">
                <frame-menu-notifications></frame-menu-notifications>
            </div>

            <div class="col-2">

                <div class="margin-10px">
                    <h1 class="txt-site txt-small txt-main txt-bold txt-capital">
                        {{ $route.params.ctr }}
                    </h1>
                </div>

                <div>
                    <!-- <h3>{{ ctr }}</h3> -->
                    <frame-notifications></frame-notifications>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import Menu from '@/components/notifications/Menu'
import FrameNotifications from '@/components/notifications/Card'

export default {
    data () {
        return {
            ctr: '',
            urlGetNotif: '',
        }
    },
    created: function () {
        if (this.$route.name == 'notif') {
            this.urlGetNotif = this.baseUrl+'/api/notifications/all?token='+this.$cookie.get('jwt')
        } else {
            this.urlGetNotif = this.baseUrl+'/api/notifications/topic/'+this.$route.params.ctr+'?token='+this.$cookie.get('jwt')
        }
        this.ctr = this.$route.params.ctr
    },
    components: {
        'frame-menu-notifications': Menu,
        'frame-notifications': FrameNotifications,
    }
}
</script>