/* 
  API 예시
  https://en.wikipedia.org/w/api.php?action=query&origin=*&pilicense=any&prop=pageimages&pithumbsize=250&format=json&gsrlimit=500&gsroffset=18&generator=search&gsrsearch=cola
  https://en.wikipedia.org/?curid=7605
 */
const WIKIPEDIA_END_POINT =
  'https://en.wikipedia.org/w/api.php?action=query&origin=*&pilicense=any&prop=pageimages&pithumbsize=250&format=json&gsrlimit=10&gsroffset=10&generator=search&gsrsearch=';

export const getWikiData = async (value, count) => {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&pilicense=any&prop=pageimages&pithumbsize=250&format=json&gsrlimit=10&gsroffset=${count}&generator=search&gsrsearch=${value}`
    );

    if (!res.ok) {
      throw new Error('API Call Fail');
    }
    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
