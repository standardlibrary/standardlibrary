<?php

use Sami\Sami;
use Sami\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('tests')
    ->in($dir = 'vendor/standardlibrary/')
;

// generate documentation for all v2.0.* tags, the 2.0 branch, and the master one
$versions = GitVersionCollection::create($dir)
    ->addFromTags('v1.0.*')
    ->add('1.0', '1.0 branch')
    ->add('master', 'master branch')
;

return new Sami($iterator, array(
    'theme'                => 'main',
    'title'                => 'Standard Library',
    'versions'             => $versions,
    'build_dir'            => 'docs/%version%/',
    'cache_dir'            => 'cache/%version%/',
    'template_dirs'        => array(
        __DIR__.'/themes/main/',
    ),
    'default_opened_level' => 2,
));
