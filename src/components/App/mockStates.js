export const stateNoVideos = {
  videos: [],
  loading: false,
  message: "test-error-message",
  currentVideo: undefined,
  deviceWidth: undefined
};

export const stateVideosFound = {
  videos: [
    {
      kind: "youtube#searchResult",
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/KT-gMlGh0B6EbPe80AT_P2vPhW4"',
      id: {
        kind: "youtube#video",
        videoId: "W6NZfCO5SIk"
      },
      snippet: {
        publishedAt: "2018-04-24T02:37:33.000Z",
        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
        title:
          "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2019]",
        description:
          "Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Get my Complete JavaScript Course to master JavaScript (83% OFF ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Programming with Mosh",
        liveBroadcastContent: "none"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/c1Q9wvqTtLqO2-YtNqgzPEXuBis"',
      id: {
        kind: "youtube#video",
        videoId: "c-I5S_zTwAc"
      },
      snippet: {
        publishedAt: "2019-12-09T19:15:01.000Z",
        channelId: "UCRLEADhMcb8WUdnQ5_Alk7g",
        title: "JAVASCRIPT in just 5 MINUTES (2020)",
        description:
          "Learn the most important parts of 2020 Javascript in just 5 minutes 🤯 You'll have to go deeper on all these topics, but this is a must-watch if you're looking to get ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/c-I5S_zTwAc/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/c-I5S_zTwAc/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/c-I5S_zTwAc/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Code Drip",
        liveBroadcastContent: "none"
      }
    },
    {
      kind: "youtube#searchResult",
      etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/2AOXIjozYE-ttAHk7-NivqMlbhg"',
      id: {
        kind: "youtube#video",
        videoId: "Qqx_wzMmFeA"
      },
      snippet: {
        publishedAt: "2019-11-05T16:00:11.000Z",
        channelId: "UCqrILQNl5Ed9Dz6CGMyvMTQ",
        title:
          "JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]",
        description:
          "Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the next level with this Clever ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Qqx_wzMmFeA/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/Qqx_wzMmFeA/mqdefault.jpg",
            width: 320,
            height: 180
          },
          high: {
            url: "https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg",
            width: 480,
            height: 360
          }
        },
        channelTitle: "Clever Programmer",
        liveBroadcastContent: "none"
      }
    }
  ],
  loading: false,
  message: null,
  currentVideo: {
    kind: "youtube#searchResult",
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/p9_bM2CeGWLSkXlLlz_QYCJ5TeA"',
    id: {
      kind: "youtube#video",
      videoId: "OcwON22ctYc"
    },
    snippet: {
      publishedAt: "2014-09-13T07:11:37.000Z",
      channelId: "UCzn6vAfspIcagLax1fck_jw",
      title:
        "Kurs JavaScript odc. 1: Skrypty po stronie klienta - pierwszy projekt, wiedza podstawowa",
      description:
        "Jeżeli masz ochotę zobaczyć więcej naszych filmów, podcastów i artykułów w coraz lepszej jakości, to zachęcamy do pozostawienia subskrypcji. Można także ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OcwON22ctYc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/OcwON22ctYc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/OcwON22ctYc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      channelTitle: "Pasja informatyki",
      liveBroadcastContent: "none"
    }
  },
  deviceWidth: 863
};
