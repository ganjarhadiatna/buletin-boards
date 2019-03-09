<template>
    <div>
        <router-link to="#" v-for="(item, index) in 7" :key="index">
            <div class="card-tag theme-1">
                <div class="c-t-info">
                    <div class="c-t-icn">
                        <span class="txt-site txt-init fa fa-1x fa-hashtag"></span>
                    </div>
                    <div class="c-t-val">
                        <div class="txt-site txt-init txt-11">
                            What's tag now {{ index }}
                        </div>
                        <div class="txt-site txt-primary txt-10">
                            <strong>20k</strong>
                            <span class="txt-site txt-thin">
                                Notes
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
