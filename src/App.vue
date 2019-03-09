<template>
	<div id="app">
		
		<div class="app-head">
			<div class="a-h-place">
				<div class="a-h-main">

					<div class="a-h-col-1">
						<router-link 
							:to="{
								name: 'home-ctr',
								params: {
									ctr: 'fresh'
								}
							}
						">
							<img src="@/assets/img/5.png" class="a-h-logo">
						</router-link>
					</div>

					<div class="a-h-col-2">
						<div class="navigator nav-theme-2 nav-all nav-font-1">
							<ul>
								<router-link :to="{name: 'buletin-index'}">
									<li>
										<span class="txt-site txt-init fa fa-1x fa-th-large"></span>
										Buletin Boards
									</li>
								</router-link>
								<router-link :to="{name: 'category-index'}">
									<li>
										<span class="txt-site txt-init fa fa-1x fa-star"></span>
										Categories
									</li>
								</router-link>
								<!-- <router-link :to="{name: 'explore'}">
									<li>
										<span class="txt-site txt-init fa fa-1x fa-compass"></span>
										Explore
									</li>
								</router-link> -->
								<router-link :to="{name: 'about'}">
									<li>
										<span class="txt-site txt-init fa fa-1x fa-info-circle"></span>
										About Us
									</li>
								</router-link>
							</ul>
						</div>
					</div>

					<div class="a-h-col-3" v-if="!$cookie.get('jwt')">
						<router-link :to="{name: 'login'}">
							<button class="btn btn-main2-color btn-radius">
								<span class="txt-site txt-init">
									Login
								</span>
							</button>
						</router-link>
						<router-link :to="{name: 'register'}">
							<button class="btn btn-main3-color btn-radius">
								Register
							</button>
						</router-link>
					</div>
					<div class="a-h-col-3" v-if="$cookie.get('jwt')">
						<router-link :to="{name: 'note-create'}">
							<button class="btn btn-main2-color btn-circle">
								<span class="txt-site txt-safe fa fa-lg fa-plus"></span>
							</button>
						</router-link>
						<router-link :to="{name: 'notif-index'}">
							<button class="btn btn-main2-color btn-circle">
								<span class="far fa-lg fa-bell"></span>
								<span class="icn-notif">4</span>
							</button>
						</router-link>
						<router-link 
							:to="{
								name: 'user-index',
								params: {
									'username': $cookie.get('username')
								}
							}">
							<button class="btn btn-main2-color btn-circle">
								<span class="far fa-lg fa-user"></span>
							</button>
						</router-link>
					</div>

					<div class="a-h-col-4">

						<form 
                            method="get" 
                            v-on:submit.prevent="doSearch">
							<div class="a-h-search">
								<div class="a-h-s-col-1">
									<input 
										type="search" 
										name="search" 
										class="txt txt-trans-color txt-big" 
										placeholder="Search .."
										v-model="txtSearch"
										required>
								</div>
								<div class="a-h-s-col-2">
									<button class="btn btn-width-all btn-no-radius btn-grey4-color">
										<span class="fa fa-lg fa-search"></span>
									</button>
								</div>
							</div>
						</form>

					</div>

				</div>
			</div>
		</div>
		
		<div class="app-body">
			<div>
				<!-- default -->
				<router-view class="a-b-place padding-20px"></router-view>

				<!-- auth -->
				<router-view name="auth"></router-view>

				<!-- 2 view -->
				<router-view class="a-b-place padding-top-20px" name="ctnTop"></router-view>
				<router-view class="a-b-place padding-bottom-20px" name="ctnMid"></router-view>

				<!-- reload -->
				<router-view class="a-b-place" name="reload" :key="$route.fullPath"></router-view>
			</div>
		</div>

		<div class="app-main">
			<!-- <div class="app-button-create">
				<button class="btn btn-circle" @click="$logOut()">
					<span class="fa fa-2x fa-plus"></span>
				</button>
			</div> -->

			<!-- loading -->
			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-loading">
					<div class="col-1">
						<div class="icn fa fa-lg fa-spin fa-circle-notch"></div>
					</div>
					<div class="col-2">
						<div class="ttl">
							Loading ...
						</div>
					</div>
				</div>
			</div>

			<!-- message -->
			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-menu">
					<div class="a-m-top">
						<div>Message</div>
					</div>
					<div class="a-m-mid">
						Are you sure?
					</div>
					<div class="a-m-bot grid-2x">
						<button class="btn txt-site txt-saf">
							No
						</button>
						<button class="btn txt-site txt-danger">
							Yes
						</button>
					</div>
				</div>
			</div>

			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-menu">
					<div class="a-m-top">
						<div>Message</div>
					</div>
					<div class="a-m-mid">
						Update this note?
					</div>
					<div class="a-m-bot grid-2x">
						<button class="btn txt-site txt-primary">
							Cancel
						</button>
						<button class="btn txt-site txt-saf">
							Execute
						</button>
					</div>
				</div>
			</div>

			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-menu">
					<div class="a-m-top">
						<div>Message</div>
					</div>
					<div class="a-m-mid">
						Note updated success
					</div>
					<div class="a-m-bot">
						<button class="btn txt-site txt-saf">
							Ok
						</button>
					</div>
				</div>
			</div>

			<!-- menu -->
			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-menu">
					<div class="a-m-top">
						<div>Message</div>
					</div>
					<div class="a-m-list">
						<ul>
							<li class="txt-site txt-main">Read</li>
							<li class="txt-site txt-saf">Edit</li>
							<li class="txt-site txt-danger">Delete</li>
							<li class="a-m-close">Cancel</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- compose -->
			<div class="app-message-fixed" v-if="false">
				<div class="app-menu-center app-menu">
					<div class="a-m-top">
						<div>Create</div>
					</div>
					<div class="a-m-list">
						<ul>
							<li class="txt-site txt-main">Create Notes</li>
							<li class="txt-site txt-main">Create Articles</li>
							<li class="txt-site txt-main">Create Images</li>
							<li class="a-m-close">Cancel</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- message bottom -->
			<!-- error -->
			<div class="app-message-bottom" v-if="false">
				<div class="app-message theme-1">
					<div class="col-1">
						<div class="icn fa fa-lg fa-info"></div>
					</div>
					<div class="col-2">
						<div class="val">
							Hmmm.. it's seem you are offline
						</div>
					</div>
					<div class="col-3">
						<button class="btn">
							Ok
						</button>
					</div>
				</div>
			</div>

			<!-- success -->
			<div class="app-message-bottom" v-if="false">
				<div class="app-message theme-2">
					<div class="col-1">
						<div class="icn fa fa-lg fa-info"></div>
					</div>
					<div class="col-2">
						<div class="val">
							Note uploaded to buletin board AAAAA
						</div>
					</div>
					<div class="col-3">
						<button class="btn">
							Check out
						</button>
					</div>
				</div>
			</div>

			<!-- success -->
			<div class="app-message-bottom" v-if="false">
				<div class="app-message theme-3">
					<div class="col-1">
						<div class="icn fa fa-lg fa-info"></div>
					</div>
					<div class="col-2">
						<div class="val">
							Failed to send your notes!
						</div>
					</div>
					<div class="col-3">
						<button class="btn">
							Try again
						</button>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			txtSearch: '',
		}
	},
	methods: {
		doSearch () {
			this.$router.push({
                name: 'search-note',
                params: {
                    ctr: this.txtSearch.toLowerCase().replace(/ /g, '+'),
                }
            });
		}
	}
}
</script>

<style>
	/* @import url('./assets/icons/fontawesome/css/all.min.css'); */
	@import url('./assets/scss/main.css');
</style>
