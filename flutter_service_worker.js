'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/config": "29e62b5d42eb29e063be121c8a9990cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b3fa18a988ab6f523d649134ed8a74d5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba9b4782a9bb491d0b4045a4fc516b56",
".git/logs/refs/heads/main": "821c50295210b0e668c6510c9024465b",
".git/logs/refs/heads/web": "cbea0b0db421da2e4063c1e436ee99a0",
".git/logs/refs/remotes/origin/main": "a653477aaa4a8460b898a671681dd65f",
".git/logs/refs/remotes/origin/web": "561ebe859357b8b9c537d1ab14259e6e",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/c1aa092edc614372d960289b401db3f29cbee2": "7b08a6f51edc6f40296ffbb23fe1806e",
".git/objects/1b/8acfea22678172fe373a362def162c51775cf3": "a5937919be94590d91f8684bd471645a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/8d8297fc87bbcb7077ed163f3f5b60a05f1f31": "1c69471ab58454dc022dc3273421638d",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/1f16ba162f8ad500186ff58acf405c595a76c6": "63dd85876bd61b14698fa6ebde826a8d",
".git/objects/28/c511a69fd3193b08786da95f11257c88c47a85": "d44440a0286f98aaaa9e65a96e245b59",
".git/objects/37/377d2fb6faeab619b4dac1eb1fab18d8177067": "f9c067a7fdf565688164056164f8160c",
".git/objects/37/418a4d3f36b03042ad09be618d743212cfa067": "d368451d16b99aa172d134728c7eebc5",
".git/objects/3d/122b4947adf77e8a5c9bf9b0508a8248c48aae": "d26004f997caf9a6f928fafdcc7c7302",
".git/objects/48/5c489545dd1f6452c29338944fc13d804be021": "f4c9c0a333a10e972cd68c698569d4fc",
".git/objects/48/dd357bee84523932a6933c33f8c116635a242c": "2da7fbf69ae0ad7a5a3ccdac875df7cd",
".git/objects/48/f3c8536d08179a19566b1a86a4f3abc3830640": "c57a186dd7f5b1d71e92b740b21a7042",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/50efd74eccc8acf7f29e9efcdcc80691b8f562": "bdfd0c65584f63a3fc83501190fad5ae",
".git/objects/50/2271a18567f067740d59bac3f7f8c048e1514a": "af31f7ee2b4f864b3a021b648ea1c1e8",
".git/objects/52/4e178711e056a6ba90632446cb8d0cdddf2b07": "c1fa8c5cffbe84cab6657fb32f407e7e",
".git/objects/56/1f666229d58d387c2cabbb5be4f906b9b2d676": "01502b3761b9a51a31cb5874d28eff18",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/6c/67ead3f82922056132b47821a5caad861bbcbb": "baadea6766a31bc83bf886e27fc2371e",
".git/objects/6c/affff845d3f9f6e2771c4a1d137e59c045c1b3": "eddbc4599e592cd3afb36e02e17d8b5a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/75/87f9107751f2b5fbbbacb8c1e1f5b9d8e0ba40": "7192a187bcfa00e64b41e65474a15fa4",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/7e711fa8e6598ced198720fa43b358275cbb00": "dacdf78edfac61013f9255a1a1285e11",
".git/objects/84/7aca4d50fdf09687a52ce1899951e436317071": "ba03e245b7b907ae77c7b675e4be4b04",
".git/objects/84/a4ad2702dcb1fa10d70471c5d4b95388a7df6c": "3075aa44996fd09a3e79f948922a8c5a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/515afe63a22a417891d4717c6326591c0d93a3": "f1327c09ac3c9fa1824d495b5fc4503a",
".git/objects/8b/dba5c0930093b1f22f656c2912d10aa5582880": "1020cbe4c556d82bf2e8f3ffb89e439d",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/ef886e22fe8ac378ee7b30e6e83be6bdb3c09e": "698a672e0d9b686d51cfa72cbb8d9090",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/d9725fd805c3faeceeee7f908464d68d8970e4": "de3370a89e914cbf4336ee64b59b8831",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/174e7e59b9f406a02f7b3640bfabfae1f25473": "f6d2344c4c100e80084c7f9affc89a71",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/b86034371b21b73863a2d8715201481d9590a5": "66799298edd0217f070decc40f68ccec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/df/dbd8e162f904635c7a42f7e01d88423a4d0e08": "a9f0422d2dd62c9d31f0356ce56c64c2",
".git/objects/e0/16989774fcd7ed5192640201dc476b7ca27cb7": "2c89e2f06cf8c4093773b69def86f16b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/165742588dd233e51b68036557aebd282d5248": "ada4413ecb11ede6b3fc15ff40060ff6",
".git/refs/heads/main": "270fd580f93723d78778e4f7b811e460",
".git/refs/heads/web": "270fd580f93723d78778e4f7b811e460",
".git/refs/remotes/origin/main": "270fd580f93723d78778e4f7b811e460",
".git/refs/remotes/origin/web": "270fd580f93723d78778e4f7b811e460",
"assets/AssetManifest.bin": "0cf7fc64253bf692177b321d907327c1",
"assets/AssetManifest.bin.json": "1be0b89e22b91b71f9c99d1f0975f1cf",
"assets/AssetManifest.json": "79237328fec9bff585da3e8781d74e8b",
"assets/assets/font/SuisseIntl-Medium.otf": "a1e155de39170e23e884eec0b1584098",
"assets/assets/font/SuisseIntl-Regular.otf": "2d4b880fbf5169b13b588482d71bdbee",
"assets/assets/icons/avatar.png": "3cd9c4631e811320d4dbd3d44cf30c2d",
"assets/assets/icons/Checkbox.svg": "91d71e135329c401da062c279947fff8",
"assets/assets/icons/logo.svg": "6c1182f8a3e2432e84c4d55b08b9f0ac",
"assets/assets/icons/logoIcon%2520(3).svg": "a02e1f9b0efc6c77a5cd21f6be4eacd2",
"assets/assets/icons/paypal.svg": "b09cd2c668f161b2a99935feed4aabe6",
"assets/assets/icons/shape%25D0%25A2wo.png": "e4fe037e95262fb73427ea98fa5e5fc0",
"assets/assets/icons/shape.png": "ab2abaf3089c2da407563ec2d6b899f5",
"assets/assets/icons/shape_subscribeOne.png": "15df8e11c2ec4bbf4c3ab140c4b315a4",
"assets/assets/icons/social.png": "95c34b2a372ce02b16b154beb4c70044",
"assets/assets/icons/stripe.svg": "f96ca03984cfc506abde0c55577585a4",
"assets/assets/icons/t-bank.svg": "f2b27a7534c47e729fa8343a303de007",
"assets/assets/icons/visa.svg": "26ffe464fce77b0c88d88c36322e339c",
"assets/FontManifest.json": "eb8e19742ea113a795d792294849e00a",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "a1ac906e54550bf2368714b85a06ae99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "51ba1449a7fc6f2a22d53b187206e282",
"/": "51ba1449a7fc6f2a22d53b187206e282",
"main.dart.js": "ba61455503963d46038d5489fff0b9aa",
"manifest.json": "71d9f8dfc30838b82f56ae1384c4a59f",
"version.json": "b6dcc78a1231e5a037e61345f72f207c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
