'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "49a8803dd7cf9eb32dd2b48c6fd4d903",
".git/config": "40c32adce15730d57bdd50402185f9b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "eac38db1addd06fc489a1b9c10646c84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe6b58796a77cb485ecf083558f3bb7e",
".git/logs/refs/heads/main": "1620ed53a5927cca99b9763ff17fb9f6",
".git/logs/refs/remotes/origin/main": "a8a824cea285bde55ba587d4341a378e",
".git/objects/02/d5842f918ff143bbbd18bd8766b8143fcd76bf": "52285bd8e6043e9fc1d868b89210577a",
".git/objects/06/859d82a40a384cfcb08e6b92afcfec3a35eb1c": "d30f02fac4bfbd3fd41d3871d71f46c5",
".git/objects/0d/cf246b5cbe5d19917ea85d58662b32e94aa615": "6f4194fe66b2c105b0760efb810b6059",
".git/objects/12/8e660331ae0b2e8628bb852ff8202cd6dacdb6": "d91f56f459981f75ae911967ee1a0645",
".git/objects/16/beb7877e12896641a442e70885f4926d3d1b32": "8f3c352e6a75c65ab12cbe5a2fcb038b",
".git/objects/20/010e240e6478989910f45257350eaba5c0273f": "702d624ed585031f3303cf0583cfd8b5",
".git/objects/21/51356f26da0e112916ad335510df7829d71a14": "bad6c239dfbea0162cd08525cfb7068b",
".git/objects/22/01756717fb786166a6ecdc85e8f6a53ebf7f8f": "76a4991b10d62aeff5be5a9b23e30066",
".git/objects/23/06b1cbb4e25d79212824d5af634c619544c0d6": "6d2182505f6b7f37a3c1985d520ee1fd",
".git/objects/24/878231a00462d7ebda8bd06c60ea2ab600eaeb": "77f8eab1dd46705512c8620f48ab395c",
".git/objects/28/84f0c6bcf36db4612d80ad122f0de6c2add7aa": "de01f9876285b0f4c49c3635ef37a909",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2b/86cba5edbd2b64dacfd56ead855c0fd937b5c3": "e3cbab1265a2e9a5b0a59096d4574690",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/30/79c4f25dd2abcca70fdac192d8ebbccdd61851": "eda18da43b330e8f00abd8a1d341a02e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/39/b1f9cc6d982505d4676ebad24ef4e8e87ceba7": "f9d4155f9a8a95d77c0417e2a90c4c63",
".git/objects/3a/eedea41e16e1f72035c037271c41986e6b4bd0": "3aceb9afd7f9d2e44f8656ae192406bc",
".git/objects/43/c407d4684edb2180811939a97b1b9b5363353a": "53d39607fdf5f4a763d2a0c6594f666e",
".git/objects/44/ba6671335c94b6db79d89486aac6104514efb2": "bf7a7c607716edeea87500208369f967",
".git/objects/47/364176d11b3064062d789f4779c7350f8500f3": "6f16ae38174159d8f66711b80db8d006",
".git/objects/56/cb86209177c90d985c14ad389932220a8c5a38": "baae188e1b8ee7acc6c601b1c1064ea9",
".git/objects/57/8e615d35ab7a288c21c8cacedf05f46f27e951": "fbd4953f9247f5a947be87683b9d89f3",
".git/objects/62/486e0f4d81a2d4000c142f5e6139e2eef9f6b5": "dd83cc269eafd559938b6525d3758291",
".git/objects/6c/cb3d6dfeaa5773748ce79a1d64edbb9e71f401": "87bf59db040ffe452d095da5ab01a8df",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/6154d1605bdebc9d342448f91b46b7d48a53fe": "f70d7f9373c8a1af92f6f17140426a9a",
".git/objects/85/687242d870507d7d313ba4f12aeddb6dc6c2a6": "6a2156073de0596612926e5b77559e6e",
".git/objects/8b/cd6dad419357fe257439d2928edef205eae4a4": "1110367fafe0f174a0c0be136ea11aea",
".git/objects/8b/d08a582e3393e013b061286dc08cc0953a2a20": "3ba6164947d5bc37baa13468032be0e0",
".git/objects/93/02dac451f91d01bedcfceabff62b878e56bd79": "26fa7c42fda91ace258887ef419bf2a5",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a6/fb96d4a4c8d220574585649d269a9ec8a01862": "7ccba42ce1bc35cc0107b869b9de1ee6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/c2caf8f302b4f658a7207c0665f30e1f2b3e6d": "5b7f63d4321915d42368dd3d84c0bdfb",
".git/objects/b0/1a9f7d91744ce2aafecd1cf6d3efc5f5707616": "8e46935b494431ff8f1247dd36204ec6",
".git/objects/bb/867e166af074217eb8f33ffeba580f06da93ef": "53af677fd18ed2f5c462c38d0baca613",
".git/objects/c4/60e96f06dd4e84569a3502854221851d236fac": "fabb02ab44701d7c1c1d61c5e60d1d3d",
".git/objects/d1/aefe89923ae524ea1a7455a4aba7b23c55462d": "66a496e8e5bf95806cdadbb6c0a07ba1",
".git/objects/d5/3992514b2696ce7b3d14a4996ee3b8769a4c28": "46abb7ea3d2bf876246ab6b2415415e4",
".git/objects/d8/e9999a07a7dc3cc4a46ff8de43b85312706fec": "2a61a7f54328c4acff2c2e7525312a71",
".git/objects/db/afaa1be81c7e5918e2736247b424be53dfa190": "fe9dead8e9e949dcda2478bb87345e06",
".git/objects/df/245f79dd7a78b06b7984319910aaa2c70ae366": "5e19b739734806946901ce00102d9654",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/06b0ee653b0fa14aebd2324be3a6eb0337c22e": "e71a62e5de9cf5be8292776151665a8d",
".git/objects/ff/a6b8515d8ca4ae8645050d4cccd0be24e83803": "7109111c7cfdab94e1871a82552d74ee",
".git/refs/heads/main": "00de07fffecb8e5b542ac9e68895d02d",
".git/refs/remotes/origin/main": "00de07fffecb8e5b542ac9e68895d02d",
"assets/AssetManifest.json": "65493dcf0163a561d7b2cff4d9f933c2",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/example.png": "9e718c6394ea643b9c3659c45eb4b60f",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/flag-english.png": "7329dc1b4637cffb56a1c3033f18778b",
"assets/assets/images/flag-khmer.png": "948a0fe85ddd04f3dd1309a7a483738d",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/icon.png": "fbfe90f885ce28edfa37961b85f24eca",
"assets/assets/images/image-not-found.png": "0de1b5aaad52d2881b6c20a5102cfe5d",
"assets/FontManifest.json": "450e14af9f5ddc3a81ed2947b3f61d65",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7c9fed43e40f9352820ff47183887bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "082cdbc21ae374ea0c962a43f8bc5260",
"icons/Icon-192.png": "cc50833ccd1db61d68a914b363763de2",
"icons/Icon-512.png": "db23e2e87ed0dc459e47ab7d85456e72",
"index.html": "99fc28777debdf914a2fca9fe9fd013e",
"/": "99fc28777debdf914a2fca9fe9fd013e",
"main.dart.js": "60ab3c31a9c6e27f8f377d63fc23e343",
"manifest.json": "22bb6ee80ccca8d169b569c39167142b",
"version.json": "0b7467881c81dfc2a80b60b1833e3e44"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
