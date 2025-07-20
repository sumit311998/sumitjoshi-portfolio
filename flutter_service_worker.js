'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b062272756da104e3528cf782d11e343",
"assets/AssetManifest.bin.json": "01afbeb3fd93ec7cce752ba07065cee6",
"assets/AssetManifest.json": "92c5eede2da2859bd5ff23cceb819036",
"assets/assets/about.txt": "938b42fb86fef91be1363d317a9e145e",
"assets/assets/certifications/CTADM_23.png": "f45b2c25a0120056ac10e0b6df133357",
"assets/assets/certifications/IBMCloudV2.png": "3c4343513d36de5a3a99ff614304f1c5",
"assets/assets/certifications/IBMConsultingEducationcommunicatingvalue.png": "8a5ea4bbe35938a99c9bf04b075b0c2b",
"assets/assets/certifications/IBMConsultingEducationdeliveringbusinessvalue.png": "159d0998b05d182097eb879bdf98046b",
"assets/assets/certifications/IBMCTAFv2.png": "d2aa598356419075a15c0bd310eace90",
"assets/assets/certifications/IBMDAConsulting%2520DT%2520Practioner.png": "8810ba5ce30afac3f5fba52ee9e9a74f",
"assets/assets/certifications/IBMDAgile-Explorer.png": "5e4a131a5a23efba5ee73b83067aca42",
"assets/assets/certifications/IBMDCloudAdvocateEssentials.png": "ff8a4f3dffed0b640a7bd1ba76e1cb64",
"assets/assets/certifications/IBMDConsultWayHabitsFoundational.png": "4e8d4c79e22be95dfba419dfdd96ae67",
"assets/assets/certifications/IBMDelCentPlatFoundations.png": "8938229396ce515eba3dd86da6e9e0d4",
"assets/assets/certifications/IBMGarageEssentials.png": "7d9e85adfdcebca1198afb50aa948cf5",
"assets/assets/certifications/IBMwatsonxE.png": "4d0f165c0df234f6cb1390f7a9c2d68f",
"assets/assets/certifications/IDAutomotive-Industry-Bronze.png": "ccf4e9463a34f92008489b4b9e165cd9",
"assets/assets/certifications/IDAutomotive-Industry-Jumpstart.png": "e1b8d6c5675956f7b633497fa0e00e41",
"assets/assets/certifications/Intro2IoT.png": "d229821bcaa2797ffdbd0b8fe1e5d54b",
"assets/assets/certifications.txt": "a75d79ce6522234cc49a30ab9f9211da",
"assets/assets/contact.txt": "f2ff412e57580a0508d8466e51d55954",
"assets/assets/experience/experience.txt": "ee089d6a36c2004050bdd69b01eca6e1",
"assets/assets/experience/ibm.png": "33bdf5c8e26b229d32fd0d059903d387",
"assets/assets/home.txt": "3858c123bf078aa3ae61e4fbfdc1dfa4",
"assets/assets/projects.txt": "33dadf3c69ebcd7408d1ed9e9b3c30ab",
"assets/assets/resume_link.txt": "685bf8ebd42b5cef311acab4a58eedb7",
"assets/assets/skills/firebase.png": "ee50e77d6caedb237bc736f4056035ab",
"assets/assets/skills/flutter.png": "8760c2a28619b8fa836a7183c0107ef4",
"assets/assets/skills/github.png": "4a98a6dd9927e131773288d03228fe64",
"assets/assets/skills/python.png": "0785b26f1f578724752c1e194c4d093f",
"assets/assets/skills/SAPBasis.png": "9bdbfa0f1b358c0b5545f976deecb2af",
"assets/assets/skills.txt": "85b158c6e9bb882f65f6c3f344f366f2",
"assets/assets/SumitJoshi_Resume.pdf": "9c908976d0c29502026d7b86bb8bdbd9",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "19837a4181b4d2d07de85adb69a43824",
"assets/NOTICES": "1c300ee816fdcb0a146113fe3a40bf4c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2102133d32ee99df6528804f81ff081c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"CNAME": "0933b1d4c4d80a6fa724c3ad5e800b46",
"favicon.png": "9869a7657e6b7a8f679be68306bb0f24",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bcfdf584c52f500b9d2fb1a6d867a506",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f2b28125404fa02f522310076b3bf6ed",
"/": "f2b28125404fa02f522310076b3bf6ed",
"main.dart.js": "5796fd0d2985c8c6eb880a65f7b53f3a",
"manifest.json": "40d4ac4805d1c9f9b4b23ca6d8739c71",
"version.json": "cb760c43553e2537d4f6fdf3ea34f9d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
