<template>
    <div class="a-s-fixed">
        <div class="txt-site txt-thin txt-11 txt-primary margin-5px">
            Navigations
        </div>
        <div class="navigator nav-theme-5 nav-full">
            <ul>
                <router-link :to="{name: 'notif-ctr', params: {'ctr': 'notifications'}}">
                    <li :class="allnotif">Notifications</li>
                </router-link>
                <!-- <router-link :to="{name: 'notif-ctr', params: {'ctr': 'likes'}}">
                    <li :class="likes">Likes</li>
                </router-link>
                <router-link :to="{name: 'notif-ctr', params: {'ctr': 'comments'}}">
                    <li :class="comments">Comments</li>
                </router-link> -->
                <router-link :to="{name: 'notif-ctr', params: {'ctr': 'activites'}}">
                    <li :class="notes">Activites</li>
                </router-link>
            </ul>
        </div>

        <div class="txt-site txt-thin txt-11 txt-primary margin-5px">
            Options
        </div>
        <div class="navigator nav-theme-5 nav-full">
            <ul>
                <li>
                    <span class="txt-site txt-init">Mark All As Read</span>
                </li>
                <!-- <li>
                    <span class="txt-site txt-danger">Clear All Notifications</span>
                </li> -->
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            allnotif: '',
            notes: '',
            comments: '',
            likes: '',
            following: '',
        }
    },
    created: function () {
        if (true) {
            if (this.$route.params.ctr == 'notifications') {
                this.allnotif = 'active'
                this.notes = ''
                this.comments = ''
                this.likes = ''
                this.following = ''
            }
            if (this.$route.params.ctr == 'activites') {
                this.allnotif = ''
                this.notes = 'active'
                this.comments = ''
                this.likes = ''
                this.following = ''
            }
            if (this.$route.params.ctr == 'comments') {
                this.allnotif = ''
                this.notes = ''
                this.comments = 'active'
                this.likes = ''
                this.following = ''
            }
            if (this.$route.params.ctr == 'likes') {
                this.allnotif = ''
                this.notes = ''
                this.comments = ''
                this.likes = 'active'
                this.following = ''
            }
            if (this.$route.params.ctr == 'following') {
                this.allnotif = ''
                this.notes = ''
                this.comments = ''
                this.likes = ''
                this.following = 'active'
            }
        }
    }
}
</script>

