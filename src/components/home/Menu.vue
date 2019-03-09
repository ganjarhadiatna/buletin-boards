<template>
    <div>
        <div class="navigator nav-theme-2 nav-all">
            <ul>
                
                <router-link 
                    :to="{
                        name: 'home-ctr',
                        params: {
                            ctr: 'fresh'
                        }
                    }">
                    <li :class="clFresh">Fresh</li>
                </router-link>

                <router-link 
                    :to="{
                        name: 'home-ctr',
                        params: {
                            ctr: 'popular'
                        }
                    }">
                    <li :class="clPopular">Popular</li>
                </router-link>

                <router-link 
                    :to="{
                        name: 'home-ctr',
                        params: {
                            ctr: 'top'
                        }
                    }">
                    <li :class="clTop">Top</li>
                </router-link>

            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            clFresh: '',
            clPopular: '',
            clTop: '',
        }
    },
    created: function () {
        
        if (this.$route.name == 'home' || this.$route.name == 'index') {
            this.clFresh = 'active'
            this.clPopular = ''
            this.clTop = ''
            console.log(this.$route.name);
        }
        else {
            if (this.$route.params.ctr == 'fresh') {
                this.clFresh = 'active'
                this.clPopular = ''
                this.clTop = ''
            }
            if (this.$route.params.ctr == 'popular') {
                this.clFresh = ''
                this.clPopular = 'active'
                this.clTop = ''
            }
            if (this.$route.params.ctr == 'top') {
                this.clFresh = ''
                this.clPopular = ''
                this.clTop = 'active'
            }
            console.log(this.$route.name);
        }
    }
}
</script>
