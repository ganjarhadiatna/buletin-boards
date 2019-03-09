<template>
    <div>
        <div class="width width-400px width-center">
            <div class="navigator nav-theme-2 nav-3x nav-ctn-center">
                <ul>

                    <router-link 
                        :to="{
                            name: 'search-note',
                            params: {
                                ctr: this.$route.params.ctr
                            }
                        }">
                        <li :class="clNotes">Notes</li>
                    </router-link>

                    <router-link 
                        :to="{
                            name: 'search-boards',
                            params: {
                                ctr: this.$route.params.ctr
                            }
                        }">
                        <li :class="clBoards">Buletin Boards</li>
                    </router-link>

                    <router-link 
                        :to="{
                            name: 'search-categories',
                            params: {
                                ctr: this.$route.params.ctr
                            }
                        }">
                        <li :class="clCategories">Categories</li>
                    </router-link>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['nav'],
    data () {
        return {
            clNotes: '',
            clBoards: '',
            clCategories: '',
        }
    },
    created: function () {
        if (this.nav == 'notes') {
            this.clNotes = 'active'
            this.clBoards = ''
            this.clCategories = ''
        }
        if (this.nav == 'boards') {
            this.clNotes = ''
            this.clBoards = 'active'
            this.clCategories = ''
        }
        if (this.nav == 'categories') {
            this.clNotes = ''
            this.clBoards = ''
            this.clCategories = 'active'
        }
    }
}
</script>