<template>
    <div>

        <div class="a-b-header">
            <h1 class="txt-site txt-capital">
                {{ $route.params.ctr.replace('+', ' ') }}
            </h1>
            <p>Here are a few results of categories, buletin boards and notes that you can try</p>
        </div>

        <!-- Trandings -->
        <!-- <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="a-b-ttl">
                        Tranding Nows
                    </div>
                </div>
                <div class="col-2">
                    <router-link 
                        class="a-b-link"
                        :to="{name: 'category-index'}">
                        More
                    </router-link>
                </div>
            </div>
            <div class="a-b-b-mid">
                <card-tag></card-tag>
            </div>
        </div> -->

        <!-- Categories -->
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
            </div>
        </div>

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

        <!-- notes -->
        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="a-b-ttl">
                        Explore Notes
                    </div>
                </div>
                <div class="col-2">
                    <router-link 
                        class="a-b-link"
                        :to="{name: 'note-index'}">
                        View More
                    </router-link>
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
import cardCategory from '@/components/category/CardSmall'
import cartTag from '@/components/tag/Card'
import cardBaner from '@/components/main/Baner'

export default {
    components: {
        'card-buletin': cardBuletin,
        'card-note': cardNote,
        'card-category': cardCategory,
        'card-tag': cartTag,
        'card-baner': cardBaner,
    }
}
</script>

