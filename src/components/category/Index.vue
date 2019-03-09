<template>
    <div>
        <div class="a-b-header">
            <h1>Collections</h1>
            <p>Here are a few of categories that you can try</p>
        </div>

        <!-- Trandings -->
        <!-- <div class="a-b-block">
            <div class="txt-site txt-12 txt-main txt-center txt-bold">
                Tranding Nows
            </div>
            <div class="a-b-b-mid">
                <card-tag></card-tag>
            </div>
        </div> -->

        <!-- Categories -->
        <div class="a-b-block">
            <!-- <div class="txt-site txt-12 txt-main txt-center txt-bold">
                Categories
            </div> -->
            <div class="a-b-b-mid">
                <card-category></card-category>
                <card-category></card-category>
            </div>
        </div>
    </div>
</template>
<script>
import cardCategory from '@/components/category/CardBig'
import cardTag from '@/components/tag/Card'

export default {
    components: {
        'card-category': cardCategory,
        'card-tag': cardTag,
    }
}
</script>
