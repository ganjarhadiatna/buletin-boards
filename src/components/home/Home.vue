<template>
    <div>
        <div class="padding-5px"></div>

        <card-baner></card-baner>

        <!-- <div class="padding-5px"></div>

        <div class="width width-center" style="text-align: center;">
            <span class="txt-site txt-9 txt-primary fa fa-lg fa-circle"></span>
            <span class="txt-site txt-9 txt-primary fa fa-lg fa-circle"></span>
            <span class="txt-site txt-9 txt-init fa fa-lg fa-circle"></span>
            <span class="txt-site txt-9 txt-primary fa fa-lg fa-circle"></span>
            <span class="txt-site txt-9 txt-primary fa fa-lg fa-circle"></span>
        </div> -->

        <div class="padding-10px"></div>

        <!-- Trandings -->
        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="a-b-ttl">
                        <span class="txt-site txt-safe fa fa-1x fa-hashtag"></span>
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
        </div>

        <!-- Categories -->
        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="a-b-ttl">
                        <span class="txt-site txt-safe far fa-1x fa-star"></span>
                        Categories
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
                <card-category></card-category>
            </div>
        </div>

        <!-- Buletin Boards -->
        <div class="a-b-block">
            <div class="a-b-b-top">
                <div class="col-1">
                    <div class="a-b-ttl">
                        <span class="txt-site txt-safe fa fa-1x fa-th-large"></span>
                        Buletin Boards
                    </div>
                </div>
                <div class="col-2">
                    <router-link 
                        class="a-b-link"
                        :to="{name: 'buletin-index'}">
                        More
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
                        <span class="txt-site txt-safe fa fa-1x fa-edit"></span>
                        Explore Notes
                    </div>
                </div>
                <div class="col-2">
                    <router-link 
                        class="a-b-link"
                        :to="{name: 'note-index'}">
                        More
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

