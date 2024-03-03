<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Symfony\Component\Filesystem\Filesystem;

class ImageExtension extends AbstractExtension
{
    public string $imagesDir;

    public function __construct(string $imagesDir)
    {
        $this->imagesDir = $imagesDir;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('imageExists', [$this, 'imageExists']),
        ];
    }

    public function imageExists(string $imageName): bool
    {
        $filesystem = new Filesystem();

        return $filesystem->exists($this->imagesDir . '/' . $imageName);
    }
}
