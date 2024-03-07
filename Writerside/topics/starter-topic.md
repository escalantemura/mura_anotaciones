# Codigo para annotaciones

Mejorar blockquote

## Regex

Para Buscar...

<tabs>
<tab title="[x]">
<code-block lang="regex">
\[(?!…).+?\]
</code-block>
</tab>
<tab title="id=x">
<code-block lang="regex">
\s+id=\"[^\"]+\"
</code-block>
</tab>
<tab title="type=x">
<code-block lang="regex">
\s+type=\"[^\"]+\"
</code-block>
</tab>
<tab title="Espacios en blanco">
<code-block lang="regex">
(?:\u00A0|\u200C|\u200D|\u2002|\u2003|\u2009|\u200B)
</code-block>
</tab>
</tabs>
## Templates

<tabs>
<tab title="Anotaciones">
<code-block lang="html">
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta content="width=device-width, initial-scale=1.0" name="viewport"&gt;
  &lt;title&gt;Titulo&lt;/title&gt;
  &lt;meta content="AutorNombre" name="author"&gt;
  &lt;meta content="cat1, cat2" name="keywords"&gt;
  &lt;link href="../../css/style.css" rel="stylesheet"&gt;
  &lt;link href="../../css/notes.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="cover"&gt;
  &lt;img alt="" src="../../img/notes/bookcovers/cover.jpg"/&gt;
&lt;/div&gt;
&lt;h1&gt;PrimerTitulo&lt;/h1&gt;
&lt;p&gt;Texto&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code-block>
</tab>

</tabs>

## Cover portada

<code-block lang="html">
&lt;div class="cover"&gt;
  &lt;img src="../../img/" alt=""/&gt;
&lt;/div&gt;
</code-block>

## Tablas

<tabs>
<tab title="Estilo normal">
Para tablas con estilo normal, usar la siguiente class. Junto con un numerador automático de "Tabla X" dentro del título
de la tabla. (usar footer para Totales).

<code-block lang="html">
&lt;table class=&quot;normal&quot;&gt;
  &lt;caption&gt;
    &lt;div class=&quot;tabla&quot;&gt;
      Título
    &lt;/div&gt;
  &lt;/caption&gt;
  &lt;thead&gt;
  &lt;tr&gt;
    &lt;th&gt;&lt;/th&gt;
  &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
  &lt;tr&gt;
    &lt;td&gt;&lt;/td&gt;
  &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</code-block>

</tab>
<tab title="Sin bordes">
<code-block lang="html">
&lt;table class=&quot;no-border&quot;&gt;
&lt;/table&gt;
</code-block>

</tab>
</tabs>

## Figuras

Insertar Figura y Footer. Junto con "Figura X" con un numerador automático.

<tabs>
<tab title="Figura">
<code-block lang="html">
&lt;div class=&quot;figura&quot;&gt;
  Título
&lt;/div&gt;
</code-block>

</tab>
<tab title="Footer">
<code-block lang="html">
&lt;footer class=&quot;footer&quot;&gt;
  Texto
&lt;/footer&gt;
</code-block>

</tab>
</tabs>

## Infoboxes

<tabs>
<tab title="Check">
<code-block lang="html">
&lt;table class=&quot;infobox check&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
<tab title="Remark">
<code-block lang="html">
&lt;table class=&quot;infobox remark&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
<tab title="Important">
<code-block lang="html">
&lt;table class=&quot;infobox check&quot;&gt;
  &lt;tr&gt;
    &lt;td rowspan=&quot;2&quot;&gt;
      &lt;div class=&quot;icono&quot;&gt;&lt;/div&gt;
    &lt;/td&gt;
    &lt;th&gt;
      Título
    &lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;
      Contenido
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code-block>
</tab>
</tabs>
