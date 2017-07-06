(function(window, document) {
'use strict';

let x265params = {
  'frame-threads': {
    shortForm: 'F',
    zerolatency: 1
  },
  'numa-pools': {
    equivalent: 'pools'
  },
  'pools': {
    equivalent: 'numa-pools'
  },
  'wpp': {
    default: true
  },
  'pmode': {
    default: false
  },
  'pme': {
    default: false
  },
  'psnr': {
    default: false
  },
  'ssim': {
    default: false
  },
  'log-level': {
    default: 2
  },
  'interlace': {
    default: 0
  },
  'level-idc': {
    default: 0
  },
  'high-tier': {
    default: 1
  },
  'uhd-bd': {
    default: 0
  },
  'ref': {
    0: 1,
    1: 1,
    2: 2,
    3: 2,
    4: 3,
    5: 3,
    6: 4,
    7: 4,
    8: 5,
    9: 5
  },
  'allow-non-conformance': {
    default: false
  },
  'repeat-headers': {
    default: false
  },
  'annexb': {
    default: true
  },
  'aud': {
    default: false
  },
  'hrd': {
    default: false
  },
  'info': {
    default: true
  },
  'hash': {
    default: 0
  },
  'temporal-layers': {
    default: false
  },
  'open-gop': {
    default: true
  },
  'bframes': {
    shortForm: 'b',
    0: 3,
    1: 3,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 8,
    8: 8,
    9: 8,
    zerolatency: 0
  },
  'b-adapt': {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 2,
    6: 2,
    7: 2,
    8: 2,
    9: 2,
    zerolatency: 0
  },
  'b-pyramid': {
    default: true
  },
  'bframe-bias': {
    default: 0
  },
  'rc-lookahead': {
    0: 5,
    1: 10,
    2: 15,
    3: 15,
    4: 15,
    5: 20,
    6: 25,
    7: 30,
    8: 40,
    9: 60,
    zerolatency: 0
  },
  'lookahead-slices': {
    0: 8,
    1: 8,
    2: 8,
    3: 8,
    4: 8,
    5: 8,
    6: 4,
    7: 4,
    8: 1,
    9: 1
  },
  'scenecut': {
    0: 0,
    1: 40,
    2: 40,
    3: 40,
    4: 40,
    5: 40,
    6: 40,
    7: 40,
    8: 40,
    9: 40,
    zerolatency: 0
  },
  'intra-refresh': {
    default: false
  },
  'ctu': {
    shorthand: 's',
    0: 32,
    1: 32,
    2: 64,
    3: 64,
    4: 64,
    5: 64,
    6: 64,
    7: 64,
    8: 64,
    9: 64
  },
  'min-cu-size': {
    0: 16,
    1: 8,
    2: 8,
    3: 8,
    4: 8,
    5: 8,
    6: 8,
    7: 8,
    8: 8,
    9: 8
  },
  'rect': {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: true,
    7: true,
    8: true,
    9: true
  },
  'amp': {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: true,
    9: true
  },
  'max-tu-size': {
    default: 32
  },
  'tu-inter-depth': {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 2,
    8: 3,
    9: 4
  },
  'tu-intra-depth': {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 2,
    8: 3,
    9: 4
  },
  'limit-tu': {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 4,
    8: 4,
    9: 0
  },
  'rdoq-level': {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 2,
    7: 2,
    8: 2,
    9: 2
  },
  'dynamic-rd': {
    default: 0.00
  },
  'ssim-rd': {
    default: false
  },
  'signhide': {
    default: true
  },
  'tskip': {
    default: false
  },
  'nr-intra': {
    default: 0
  },
  'nr-inter': {
    default: 0
  },
  'constrained-intra': {
    default: false
  },
  'strong-intra-smoothing': {
    default: true
  },
  'max-merge': {
    0: 2,
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
    7: 3,
    8: 4,
    9: 5
  },
  'limit-refs': {
    0: 0,
    1: 0,
    2: 3,
    3: 3,
    4: 3,
    5: 3,
    6: 3,
    7: 2,
    8: 1,
    9: 0
  },
  'limit-modes': {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: true,
    7: true,
    8: true,
    9: false
  },
  'me': {
    0: 0,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 3,
    7: 3,
    8: 3,
    9: 3
  },
  'subme': {
    shortForm: 'm',
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
    7: 3,
    8: 4,
    9: 5
  },
  'merange': {
    0: 57,
    1: 57,
    2: 57,
    3: 57,
    4: 57,
    5: 57,
    6: 57,
    7: 57,
    8: 57,
    9: 92
  },
  'temporal-mvp': {
    default: true
  },
  'weightp': {
    shortForm: 'w',
    0: false,
    1: false,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    fastdecode: false
  },
  'weightb': {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: true,
    9: true,
    fastdecode: false
  },
  'analyze-src-pics': {
    default: false
  },
  'deblock': {
    default: [0, 0],
    fastdecode: false
  },
  'sao': {
    0: false,
    1: false,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    grain: false,
    fastdecode: false
  },
  'sao-non-deblock': {
    default: false
  },
  'rd': {
    0: 2,
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 3,
    6: 4,
    7: 6,
    8: 6,
    9: 6
  },
  'early-skip': {
    0: true,
    1: true,
    2: true,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  },
  'rskip': {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: false,
    9: false,
    grain: false
  },
  'fast-intra': {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  },
  'tskip-fast': {
    default: false
  },
  'cu-lossless': {
    default: false
  },
  'b-intra': {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: true,
    9: true,
    fastdecode: false
  },
  'rdpenalty': {
    default: 0
  },
  'psy-rd': {
    default: 2.00,
    psnr: 0.00,
    ssim: 0.00,
    grain: 4.00
  },
  'psy-rdoq': {
    0: 0.00,
    1: 0.00,
    2: 0.00,
    3: 0.00,
    4: 0.00,
    5: 0.00,
    6: 1.00,
    7: 1.00,
    8: 1.00,
    9: 1.00,
    psnr: 0.00,
    ssim: 0.00,
    grain: 10.00
  },
  'rd-refine': {
    default: false
  },
  'analysis-reuse-mode': {
    equivalent: 'analysis-mode',
    default: 0
  },
  'analysis-mode': {
    equivalent: 'analysis-reuse-mode',
    default: 0
  },
  'analysis-reuse-level': {
    equivalent: 'refine-level ',
    default: 5
  },
  'refine-level': {
    equivalent: 'analysis-reuse-level ',
    default: 5
  },
  'lossless': {
    default: false
  },
  'cbqpoffs': {
    default: 0
  },
  'crqpoffs': {
    default: 0
  },
  'rc': {
    default: 'crf'
  },
  'crf': {
    default: 28.0
  },
  'qcomp': {
    default: 0.60
  },
  'qpstep': {
    default: 4,
    grain: 1
  },
  'ipratio': {
    default: 1.40,
    grain: 1.10
  },
  'pbratio': {
    default: 1.30,
    grain: 1.00
  },
  'aq-mode': {
    0: 0,
    1: 0,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    grain: 0,
    ssim: 2
  },
  'aq-strength': {
    default: 1.00,
    psy: 0.00
  },
  'cutree': {
    default: true,
    psnr: false,
    grain: false,
    zerolatency: false
  },
  'zone-count': {
    default: 0
  },
  'zone-count': {
    default: 0
  },
  'strict-cbr': {
    default: false
  },
  'qg-size': {
    0: 32,
    1: 32,
    2: 64,
    3: 64,
    4: 64,
    5: 64,
    6: 64,
    7: 64,
    8: 64,
    9: 64
  },
  'rc-grain': {
    default: false,
    grain: true
  },
  'const-vbv': {
    default: false,
    grain: true
  },
  'qpmax': {
    default: 69
  },
  'qpmin': {
    default: 0
  },
  'overscan': {
    default: 0
  },
  'videoformat': {
    default: 5
  },
  'range': {
    default: 0
  },
  'colorprim': {
    default: 2
  },
  'transfer': {
    default: 2
  },
  'colormatrix': {
    default: 2
  },
  'chromaloc': {
    default: 0
  },
  'display-window': {
    default: 0
  },
  'max-cll': {
    default: '0,0'
  },
  'min-luma': {
    default: 0
  },
  'max-luma': {
    default: 255
  },
  'log2-max-poc-lsb': {
    default: 8
  },
  'vui-timing-info': {
    default: true
  },
  'vui-hrd-info': {
    default: true
  },
  'slices': {
    default: 1
  },
  'opt-qp-pps': {
    default: true
  },
  'opt-ref-list-length-pps': {
    default: true
  },
  'multi-pass-opt-rps': {
    default: false
  },
  'scenecut-bias': {
    default: 0.05
  },
  'opt-cu-delta-qp': {
    default: false
  },
  'aq-motion': {
    default: false
  },
  'hdr': {
    default: false
  },
  'hdr-opt': {
    default: false
  },
  'dhdr10-opt': {
    default: false
  },
  'scale-factor': {
    default: 0
  },
  'refine-intra': {
    default: 0
  },
  'refine-inter': {
    default: 0
  },
  'refine-mv': {
    default: 0
  },
  'limit-sao': {
    default: false
  },
  'ctu-info': {
    default: 0
  }
}

// Custom method for equalities of FLAT arrays of SAME LENGTH
// See https://stackoverflow.com/a/14853974 for complete equality
// Attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = Array.prototype.equals || function (array) {
    for (let i = 0, l = this.length; i < l; ++i)
      if (this[i] !== array[i])
          return false;
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, 'equals', {enumerable: false});

/**
 * Add to an existing array non-default command line arguments
 * @param {String} k - They key
 * @param {Array|Integer|String} v - The value to add if it is different
 * from vSource
 * @param {Array|Integer|String} vSource - The value to compare to
 *
 */
Array.prototype.addCL = function (k, v, vSource) {
  // Array equality is particular
  if (v instanceof Array) {
    if (!v.equals(vSource))
    // At the moment only deblock is concerned by arrays
      this.push(k+ '=' + v[0]+ ':' +v[1]);
  }
  else {
    if (v !== vSource)
      // Booleans have no parameters
      this.push( (typeof v === 'boolean') ? ((v) ? '' : 'no-') +k : k+ ' ' +v );
  }
}

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('myform').addEventListener('submit', function (e) {
  
    e.stopPropagation();
    e.preventDefault();
    
    try {
    
      // Clean previous informations
      let precisions = document.getElementById('precisions');
      while (precisions.firstChild) {
        precisions.removeChild(precisions.firstChild);
      }
      
      // Split every parameter (Hex dump separator is ' ', MediaInfo is ' / ')
      // => Mandatory one space ' {1}'
      // => Eventual '/ ' '(?:\/ )' '?:' for non-capturing
      //    Appears 0 or 1 times '?'
      let settings = this.elements[0].value.split(/ {1}(?:\/ )?/g),
          paramsList = {
            toString: () => {
              return 'yolo';
            }
          },
          key,
          value,
          customCL = [],
          nonDefaults = new Set(), // Use a Set for unique items
          presets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          presetsName = [
            'ultrafast',
            'superfast',
            'veryfast',
            'faster',
            'fast',
            'medium', // default
            'slow',
            'slower',
            'veryslow',
            'placebo'
          ],
          tunings = {
            psnr: 0,
            ssim: 0,
            grain: 0,
            fastdecode: 0,
            zerolatency: 0
          };
      
      // Store the parameters in paramsList
      // ?????????????????????????????????????
      // ?? Using for (key... DOES NOT work ??
      // ??????????????????????????????????????
      for (const param of settings) {
      
        // Boolean false
        if (param.startsWith('no-')) {
          key = param.substring(3);
          value = false;
        }
        // Boolean true (no '=' found)
        else if (!param.includes('=')) {
          key = param;
          value = true;
        }
        // Value
        else {
          key = param.substring(0, param.indexOf('='));
          value = param.substring(param.indexOf('=') + 1);
          value = (isFinite(value)) ? parseFloat(value) : value;
        }
        
        paramsList[key] = value;
      
      }
      
      
      // Treat special cases
      // 1. A deviation from x264 indicating multi-pass as 'rc=n pass'
      // with a space, making recognition of multi-pass encodes fail
      if (paramsList['pass']) {
        delete paramsList['pass'];
        paramsList['rc'] = paramsList['rc'] +'pass';
      }
      
      // 2. deblock
      if (paramsList.hasOwnProperty('deblock') &&
        paramsList.deblock !== false) {
        // tC and beta offsets are separated by : or ,
        // If deblock was one value it was earlier casted as Number
        // => Trick '' +
        paramsList.deblock = ('' +paramsList.deblock).split(/:|,/g);
        
        // For 2 elements, this is faster than map
        paramsList.deblock[0] = parseInt(paramsList.deblock[0], 10) || 0;
        
        // In the case there is one value, tC and beta are then equal
        paramsList.deblock[1] = ( (paramsList.deblock[1] === undefined) ?
          paramsList.deblock[0] :
          parseInt(paramsList.deblock[1], 10) ) || 0;
      }
      
      // Compare each parameter's value with the default list.
      // If it is not a default value, add it to the command line or
      // the presets / tunings counter.
      for (key in paramsList) {
        // This should prevent false positives with auto-detected values
        // or ones given by the GUI
        // e.g.: cpuid, input-res...
        if (x265params[key] !== undefined) {
          for (const entry in x265params[key]) {
          
            // Differentiate default, preset and tune
            
            // Default
            if (entry === 'default')
              customCL.addCL(key, paramsList[key], x265params[key][entry]);
            
            // Presets and tunings
            else {
              // Store the key for later comparison with presets and tunings
              nonDefaults.add(key);
              if (paramsList[key] === x265params[key][entry]) {
                // ULTRA TERNARY POWER
                ((isFinite(entry)) ? presets : tunings)[entry]++;
              }
                // If a preset or a tuning were to modify "arrays"
                // Uncomment and adapt --
                /*
                if (paramsList[key] instanceof Array) {
                    if (!paramsList[key].equals(x265params[key][entry]))
                    // At the moment only deblock is concerned by arrays
                      customCL += ' --' +key+ '=' +
                        paramsList[key][0]+ ':' +paramsList[key][1];
                }
                */
                // -- Uncomment
            }
          
          }
        }
      }
      
      // Find the preset first (highest value in presets)
      // Credits: https://blogs.msdn.microsoft.com/oldnewthing/20140526-00/
      let probablePreset = ((arr) => {
        let highest = 0,
            l = arr.length;
        for (let i = 1; i < l; ++i) {
          if(arr[i] > arr[highest]) highest = i;
        }
        return highest;
      })(presets);
      
      // Is there tuning? (at least 3 values modified by tunings)
      let probableTune = Object.keys(tunings).reduce((a, b) =>
        (tunings[a] > tunings[b]) ? a : b
      );
      if (tunings[probableTune] < 3)
        probableTune = false;
      
      let probableDepth;
      
      
      // Take care of presets and tunings parameters
      nonDefaults.forEach((k) => {
        if (x265params[k][probablePreset] !== undefined)
          customCL.addCL(k, paramsList[k], x265params[k][probablePreset]);
        
        if (probableTune) {
          if (x265params[k][probableTune] !== undefined) {
            customCL.addCL(k, paramsList[k], x265params[k][probableTune]);
            
            // Remove redundant arguments
            if (paramsList[k] === x265params[k][probableTune]) {
              // NOT OPTIMAL
              // This is done by scanning existing arguments and
              // keeping the non-redundant ones
              customCL = customCL.filter(el => (el.indexOf(k) === -1));
            }
          }
        }
      });
      
      // If rate-control method is not crf (default) then it is bitrate or qp
      if (paramsList.rc !== 'crf') {
        // Replace the useless --rc argument by the corresponding method
        customCL[customCL.findIndex((el) => 
         el.indexOf('rc') !== -1)
        ] = ((paramsList.qp) ? 'qp=' +paramsList.qp :
            'bitrate=' +paramsList.bitrate);
        if (paramsList.rc.substring(1) === 'pass')
          HTMLadd(
            'info',
            `The encode was done in ${ paramsList.rc.substring(0, 1) }-pass.`
          );
      }
      
      // Add tune as second...
      if (probableTune)
        customCL.unshift('tune ' +probableTune);
      // ... and preset as first argument
      if (probablePreset !== 5) // preset medium is default so no need
        customCL.unshift('preset ' +presetsName[probablePreset]);
      
      /*
        Start of the info / warning dialogs
      */
      if (paramsList['ref'] >
        (8 - !!(paramsList['bframes']) - !!(paramsList['b-pyramid']))
      )
        HTMLadd(
          'error',
          `Non-conformance.
          The total L0 references (<code>--ref</code>) is greater than
          what is allowed by HEVC.
          Compliant decoders may refuse to decode such streams.`
        );
      if (paramsList['rc-grain'] && probableTune !== 'grain')
        HTMLadd(
          'warning',
          `rc-grain should not be used without <code>--tune grain</code>`
        );
      if ((probableTune === 'psnr' || probableTune === 'ssim') &&
        paramsList['rd'] >= 3 && !paramsList['ssim-rd'])
        HTMLadd(
          'warning',
          `You should enable <code>--ssim-rd</code> with PSNR and SSIM tunings.`
        );
      if (probableTune === 'psnr' && !paramsList['aq-strength'])
        HTMLadd(
          'warning',
          `aq should not be enabled with <code>--tune psnr</code>.`
        );
      if ((probableTune === 'psnr' || probableTune === 'ssim') &&
        (paramsList['psy-rd'] || paramsList['psy-rdoq'])
      )
        HTMLadd(
          'warning',
          `Psycho-visual optimisations may degrade PSNR and SSIM measurements.
          Disable with <code>--tune psnr</code> or <code>--tune ssim</code>.`
        );
      if ((paramsList['pmode'] || paramsList['pme']) && probablePreset <= 6)
        HTMLadd(
          'warning',
          `Parallel mode decision (<code>pmode</code>)
          and / or parallel motion estimation (<code>pme</code>) are activated
          while a fast preset (>= slow) is used.
          It is not recommended to activate those options
          but rather to lower the preset.`
        );
      if (paramsList['rd'] < 5 && paramsList['rd-refine'])
        HTMLadd(
          'warning',
          `<code>--rd-refine</code> is only effective at RD levels 5 and 6.`
        );
      if (paramsList['max-luma'] !== 255) {
        if (Number.isInteger(
          probableDepth = Math.log2(paramsList['max-luma'] + 1)
        ))
          HTMLadd(
            'info',
            `<code>--max-luma ${ paramsList['max-luma'] }</code>
            may actually indicate <code>--output-depth ${ probableDepth}</code>.`
          );
      }
      if (paramsList['qg-size'])
          HTMLadd(
            'info',
            `<code>--qg-size</code>
            may appear in the arguments but you can ignore it.
            <a href='http://x265.readthedocs.io/en/default/cli.html#cmdoption-qg-size' rel='external'>Documentation</a>
            states it as experimental
            and should be aligned with maxCUSize but this is not the case.`
          );
      if (paramsList['lookahead-slices'] <= 1 && probablePreset >= 8)
          HTMLadd(
            'info',
            `<code>--lookahead-slices</code> 1 and 0 are equivalent
            and can be omitted for this preset`
          );
      /*
        End of the info / warning dialogs
      */
      
      customCL = '--' +customCL.join(' --');
      
      console.groupEnd();
      console.group('Command line arguments');
      console.log(customCL);
      console.groupEnd();
      
      for (;;) {
        break;
      }
      
      document.getElementById('clargs').textContent = customCL;
    }
    catch (e) {
      console.log(e);
    }
  
  }, false);

}, false);

let HTMLadd = (cssClass, message) => {
  document.getElementById('precisions').insertAdjacentHTML('beforeend', 
  `<div class='${ cssClass }'>${ message }</div>`);
}

window.toggleNightMode = () => {
  let nM = document.getElementById('night-mode');
  
  if (nM === null) {
    nM = document.head.appendChild(document.createElement('style'));
    nM.id = 'night-mode';
    nM.textContent = `
    body {
      background: #33373A;
    }
    html, img, video {
      -webkit-filter: invert(1) hue-rotate(180deg);
      filter: invert(1) hue-rotate(180deg);
    }`;
  }
  else {
    nM.remove();
  }
  return false;
}

})(window, document);
