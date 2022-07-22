async function register ({
  transcodingManager
}) {
  transcodingManager.addVODProfile('libvpx-vp9', 'vp9-small', () => ({
    inputOptions: [],
    outputOptions: ['-crf', '40']
  }));

  transcodingManager.addVODEncoderPriority('video', 'libvpx-vp9', 1000);

  transcodingManager.addVODProfile('libopus', 'opus-small', () => ({
    inputOptions: [],
    outputOptions: ['-b:a', '48K']
  }));

  transcodingManager.addVODEncoderPriority('audio', 'libopus', 1000);
}

async function unregister () {
  transcodingManager.removeAllProfilesAndEncoderPriorities();
}

module.exports = {
  register,
  unregister
};
