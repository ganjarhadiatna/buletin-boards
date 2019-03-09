import Vue from 'vue'
import Router from 'vue-router'

// home
import Home from '@/components/home/Index'
import HomeNotes from '@/components/home/Notes'

// explore
import Explore from '@/components/explore/Index'

// about
import About from '@/components/about/About'

// auth
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

// user
import User from '@/components/user/Index'

// user setting
import UserBasic from '@/components/user/setting/Basic'
import UserProfile from '@/components/user/setting/Profile'
import UserPassword from '@/components/user/setting/Password'

// notifications
import Notif from '@/components/notifications/Index'

// buletin
import BuletinIndex from '@/components/buletin/Index'

// notes
import NoteIndex from '@/components/note/Index'
import NoteView from '@/components/note/crud/View'
import NoteCreate from '@/components/note/crud/Create'

// search
import SearchIndex from '@/components/search/Index'
import SearchNotes from '@/components/search/Notes'
import SearchBoards from '@/components/search/Boards'
import SearchCategories from '@/components/search/Categories'

// tags
import TagsIndex from '@/components/tag/Index'

// tags
import CategoryIndex from '@/components/category/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home/fresh'
    },
    {
      path: '/home/:ctr',
      name: 'home-ctr',
      components: {
        ctnTop: Home,
        reload: HomeNotes
      }
    },
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      components: {
        auth: Login
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        auth: Register
      }
    },
    {
      path: '/news',
      name: 'notif-index',
      redirect: '/news/notifications'
    },
    {
      path: '/news/:ctr',
      name: 'notif-ctr',
      components: {
        reload: Notif
      }
    },
    {
      path: '/search/notes/:ctr',
      name: 'search-note',
      components: {
        ctnTop: SearchIndex,
        ctnMid: SearchNotes
      }
    },
    {
      path: '/search/boards/:ctr',
      name: 'search-boards',
      components: {
        ctnTop: SearchIndex,
        ctnMid: SearchBoards
      }
    },
    {
      path: '/search/categories/:ctr',
      name: 'search-categories',
      components: {
        ctnTop: SearchIndex,
        ctnMid: SearchCategories
      }
    },
    {
      path: '/notes',
      name: 'note-index',
      component: NoteIndex
    },
    {
      path: '/note/:idnotes',
      name: 'note-view',
      components: {
        auth: NoteView
      }
    },
    {
      path: '/compose',
      name: 'note-create',
      components: {
        auth: NoteCreate
      }
    },
    {
      path: '/categories',
      name: 'category-index',
      component: CategoryIndex
    },
    {
      path: '/buletins',
      name: 'buletin-index',
      component: BuletinIndex
    },
    {
      path: '/tags',
      name: 'tag-index',
      component: TagsIndex
    },
    {
      path: '/me/setting',
      name: 'user-setting',
      redirect: '/me/setting/basic'
    },
    {
      path: '/me/setting/basic/',
      name: 'user-setting-basic',
      component: UserBasic
    },
    {
      path: '/me/setting/profile/',
      name: 'user-setting-profile',
      component: UserProfile
    },
    {
      path: '/me/setting/password/',
      name: 'user-setting-password',
      component: UserPassword
    },
    {
      path: '/:username',
      name: 'user-index',
      component: User
    }
  ],
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
