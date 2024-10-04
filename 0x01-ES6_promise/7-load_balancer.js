export default function loadBalancer(chinaDownload, USDownload) {
  let result;
  Promise.any([chinaDownload, USDownload])
    .then((value) => {
      result = value;
    });
  return result;
}
