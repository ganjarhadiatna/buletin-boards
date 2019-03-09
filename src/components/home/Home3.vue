<template>
    <div>

        <div class="app-main-page">
            <div class="col-1">
                
                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Categories
                            </div>
                        </div>
                        <div class="col-2">
                            <!-- <router-link 
                                class="a-b-link"
                                :to="{name: 'category-index'}">
                                View More
                            </router-link> -->
                        </div>
                    </div>
                    <div class="a-b-b-mid">
                        <card-category></card-category>
                    </div>
                </div>

            </div>
            
            <div class="col-2">
                
                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Popular Notes
                            </div>
                        </div>
                        <div class="col-2">
                            <!-- <router-link 
                                class="a-b-link"
                                :to="{name: 'tag-index'}">
                                View More
                            </router-link> -->
                        </div>
                    </div>
                    <div class="a-b-b-mid">
                        <card-note></card-note>
                        <button class="btn btn-grey3-color btn-width-all margin-top-20px">
                            <span>Load More</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-3">
                <!-- Buletin Boards -->
                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Buletin Boards
                            </div>
                        </div>
                        <div class="col-2">
                            <router-link 
                                class="a-b-link"
                                :to="{name: 'buletin-index'}">
                                View More
                            </router-link>
                        </div>
                    </div>
                    <div class="a-b-b-mid">
                        <card-buletin></card-buletin>
                    </div>
                </div>

                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Tranding Nows
                            </div>
                        </div>
                        <div class="col-2">
                            <!-- <router-link 
                                class="a-b-link"
                                :to="{name: 'tag-index'}">
                                View More
                            </router-link> -->
                        </div>
                    </div>
                    <div class="a-b-b-mid">
                        <card-tag></card-tag>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import cardBuletin from '@/components/buletin/CardList'
import cardNote from '@/components/note/CardBig'
import cardTag from '@/components/tag/CardSmall'
import cardCategory from '@/components/category/CardList'
import cardBaner from '@/components/main/Baner'

export default {
    components: {
        'card-buletin': cardBuletin,
        'card-note': cardNote,
        'card-category': cardCategory,
        'card-tag': cardTag,
        'card-baner': cardBaner,
    }
}
</script>