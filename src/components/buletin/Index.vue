<template>
    <div>
        <div class="a-b-header">
            <h1>Buletin Boards</h1>
            <p>Explore our free popular Buletin Boards</p>
        </div>
        <div class="a-b-block">
            <!-- <div class="a-b-b-top">
                <div class="col-1">
                    <div class="navigator nav-theme-2 nav-all">
                        <ul>
                            <li class="active">All</li>
                            <li>Business</li>
                            <li>Personal</li>
                        </ul>
                    </div>
                </div>
                <div class="col-2"></div>
            </div> -->
            <div class="a-b-b-mid">
                <card-buletin></card-buletin>
                <card-buletin></card-buletin>
            </div>
        </div>
    </div>
</template>
<script>
import cardBuletin from '@/components/buletin/Card'

export default {
    components: {
        'card-buletin': cardBuletin,
    }
}
</script>
