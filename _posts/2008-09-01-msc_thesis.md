---
layout: bibtex
name: hollt_msc_thesis
kind: masters
author: T. Höllt
title: Direct Processing of Compressed Volume Data
school: Universität Koblenz-Landau
journal: Masters Thesis
page_start: 
page_end: 
volume: 
issue: 
year: 2008
doi: 
pdf: assets/papers/hollt_msc_thesis/da_direct_processing_of_compressed_volume_data.pdf
poster: assets/papers/hollt_msc_thesis/da_direct_processing_of_compressed_volume_data_poster.pdf
video: 
slides: 
fastforward: 
---
Using programmable graphics hardware (GPU) is the de-facto standard for real time volume rendering nowadays. In addition to that, GPUs are often used for non-graphical tasks to accelerate complex computations and also allow the direct rendering of (intermediate) results. 
However, the amount of graphics memory can become a problem when working with large volume datasets. Even though todays graphics hardware provides more memory than ever before, the amount of data is also increasing rapidly. 
In order to overcome this, lots of compression algorithms have been developed and some of them even are hardware-accelerated. As these implementations only support a small range of formats and often do not provide sufficient quality, custom algorithms have been implemented which often utilize shader programs for decoding and encoding. While this has proven useful for visualization, providing interactive framerates for direct volume rendering, the algorithms focus on displaying the data, not processing it. 
In this thesis different compression techniques are compared with focus on their suitability for processing in the compression domain. A wavelet transform based compression scheme is implemented which allows lossless as well as lossy compression of volume data. Image processing operations are classified based on their applicability in the wavelet compression domain. Based on this classification different image operations are exemplarily implemented. Furthermore for visualization multi-planar reconstruction directly from the compressed data is presented. 
The results of this thesis are compared to processing in the spatial domain, showing advantages and shortcomings. Concluding an outlook on possible future work is given.