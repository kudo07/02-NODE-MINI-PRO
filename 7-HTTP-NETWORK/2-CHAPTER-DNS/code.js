const fetchIpAddress = async (domain) => {
  const resp = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`,
    {
      headers: {
        accept: 'application/dns-json',
      },
    }
  );
  const respObj = await resp.json();
  console.log(respObj);
  for (const record of respObj.Answer) {
    return record.data;
  }
  return null;
};

const domain = 'api.boot.dev';
const ipAddress = await fetchIpAddress(domain);
if (!ipAddress) {
  console.log('something went wrong in fetchIpAddress');
} else {
  console.log(`found IP address for domain ${domain}: ${ipAddress}`);
}
