<template>
    <div>

        <div class="a-b-header">
            <h1>Explore</h1>
            <p>Explore our free popular Buletin Boards, notes, categories and tags</p>
        </div>
        
        <div class="a-b-grid">
            <div class="col-1">
                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Categories
                            </div>
                        </div>
                        <div class="col-2">
                            <router-link 
                                class="a-b-link"
                                :to="{name: 'category-index'}">
                                View More
                            </router-link>
                        </div>
                    </div>
                    <div class="a-b-b-mid">
                        <card-category></card-category>
                        <card-category></card-category>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="a-b-block">
                    <div class="a-b-b-top">
                        <div class="col-1">
                            <div class="a-b-ttl">
                                Tranding Nows
                            </div>
                        </div>
                        <div class="col-2">
                            <router-link 
                                class="a-b-link"
                                :to="{name: 'tag-index'}">
                                View More
                            </router-link>
                        </div>
                    </div>
                    <div class="a-b-b-mid" style="padding-top: 1px;">
                        <card-tag></card-tag>
                    </div>
                </div>
            </div>
        </div>

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

        <div class="padding-top-5px"></div>

        <!-- notes -->
        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="navigator nav-theme-2 nav-all">
                        <ul>
                            <li class="active">Fresh</li>
                            <li>Popular</li>
                            <li>Top</li>
                        </ul>
                    </div>
                </div>
                <div class="col-2">
                    <div class="navigator nav-theme-3 nav-all" style="float: right;">
                        <ul>
                            <li>
                                <span class="fa fa-lg fa-th"></span>
                            </li>
                            <li>
                                <span class="fa fa-lg fa-th-list"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="a-b-b-mid">
                <card-note></card-note>
            </div>
        </div>

    </div>
</template>

<script>
import cardBuletin from '@/components/buletin/Card'
import cardNote from '@/components/note/Card'
import cardCategory from '@/components/category/CardBig'
import cardTag from '@/components/tag/CardSmall'
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

