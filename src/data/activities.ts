// 活動ページ（/activities/）のデータ。ここに追記すれば自動で年ごと・新しい順に並ぶ。

export interface OrganizedSeries {
  title: string;
  url?: string;
  note?: string;
}

export type Role = 'talk' | 'organizer';

export interface Activity {
  title: string;
  url?: string;
  venue: string;
  /** 開始日 (YYYY-MM-DD) */
  start: string;
  /** 終了日 (YYYY-MM-DD)。1日だけの場合は省略 */
  end?: string;
  role?: Role;
}

// 継続的に主催しているセミナー・研究集会など
export const organized: OrganizedSeries[] = [
  { title: '〇〇セミナー', url: 'https://example.com/', note: '〇〇に興味のある方を歓迎します' },
  { title: '〇〇勉強会' },
];

// 参加・講演・主催したイベント
export const activities: Activity[] = [
  {
    title: '第9回すうがく徒のつどい',
    url: 'https://math-tsudoi.jp/9/',
    venue: '千葉大学',
    start: '2026-03-20',
    end: '2026-03-21',
    role: 'organizer',
  },
  {
    title: '第２７回高木レクチャー',
    url: 'https://www.ms.u-tokyo.ac.jp/~toshi/jjm/JJMJ/JJM_JHP/contents/takagi_jp/27th/index.htm',
    venue: '東京大学',
    start: '2026-10-11',
    end: '2026-10-12',
  },
  {
    title: '第二回小淵沢若手数学者勉強会「Gestalten」',
    url: 'https://web-math-seminar.syzygy-pres.workers.dev/ja/sessions/2',
    venue: '山梨県ヴィラ千ヶ滝',
    start: '2026-10-17',
    end: '2026-10-19',
  },
];
